// Minimal zero-dependency static file server for the pre-built Astro site in dist/.
// Some hosts run a Node.js "app" with a required entry file instead of serving
// static files directly. This lets that mode work too — it just serves the
// same static build that `npm run build` produces.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST_DIR = join(__dirname, 'dist');
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

async function resolveFile(pathname) {
  const candidates = pathname.endsWith('/')
    ? [pathname + 'index.html']
    : [pathname, pathname + '/index.html'];

  for (const candidate of candidates) {
    const safePath = normalize(join(DIST_DIR, candidate));
    if (!safePath.startsWith(DIST_DIR)) continue;
    try {
      const stats = await stat(safePath);
      if (stats.isFile()) return safePath;
    } catch {
      // try next candidate
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', 'http://localhost');
  const filePath = await resolveFile(decodeURIComponent(url.pathname));

  if (filePath) {
    const body = await readFile(filePath);
    res.writeHead(200, { 'Content-Type': MIME_TYPES[extname(filePath)] ?? 'application/octet-stream' });
    res.end(body);
    return;
  }

  try {
    const notFound = await readFile(join(DIST_DIR, '404.html'));
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(notFound);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Serving dist/ at http://localhost:${PORT}`);
});
