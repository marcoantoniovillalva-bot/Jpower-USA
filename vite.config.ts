import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import fs from 'fs';
import type { IncomingMessage, ServerResponse } from 'http';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const MARKETIZZATI_ENV_PATH = 'C:\\Users\\Villalva\\Desktop\\Marketizzati definitifo\\marketizzati\\.env.local';
const imageCache = new Map<string, string>();

const readExternalEnv = () => {
  if (!fs.existsSync(MARKETIZZATI_ENV_PATH)) {
    return {};
  }

  return dotenv.parse(fs.readFileSync(MARKETIZZATI_ENV_PATH, 'utf8'));
};

const readJsonBody = (req: IncomingMessage) =>
  new Promise<Record<string, string>>((resolve, reject) => {
    const chunks: Buffer[] = [];

    req.on('data', (chunk) => {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    });

    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', reject);
  });

const sendJson = (res: ServerResponse, statusCode: number, payload: unknown) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const externalEnv = readExternalEnv();
  const openAiApiKey = env.OPENAI_API_KEY || externalEnv.OPENAI_API_KEY || '';

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'local-openai-image-endpoint',
        configureServer(server) {
          server.middlewares.use('/api/generate-image', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            if (!openAiApiKey) {
              sendJson(res, 500, { error: 'Missing OPENAI_API_KEY for local image generation.' });
              return;
            }

            try {
              const { prompt = '', size = '1536x1024' } = await readJsonBody(req);

              if (!prompt.trim()) {
                sendJson(res, 400, { error: 'Prompt is required.' });
                return;
              }

              const cacheKey = `${size}:${prompt}`;
              const cached = imageCache.get(cacheKey);

              if (cached) {
                sendJson(res, 200, { image: cached, cached: true });
                return;
              }

              const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${openAiApiKey}`,
                },
                body: JSON.stringify({
                  model: 'gpt-image-1',
                  prompt,
                  size,
                }),
              });

              const payload = await response.json();

              if (!response.ok) {
                sendJson(res, response.status, { error: payload?.error?.message || 'Image generation failed.' });
                return;
              }

              const base64 = payload?.data?.[0]?.b64_json;

              if (!base64) {
                sendJson(res, 502, { error: 'The image provider returned no image.' });
                return;
              }

              const image = `data:image/png;base64,${base64}`;
              imageCache.set(cacheKey, image);
              sendJson(res, 200, { image, cached: false });
            } catch (error) {
              sendJson(res, 500, {
                error: error instanceof Error ? error.message : 'Unexpected image generation error.',
              });
            }
          });
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3003,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

