/**
 * Vercel Edge Middleware — injects Firebase client config as an inline script.
 * Keys come from Vercel environment variables (never exposed in source).
 * Runs on every HTML page request.
 */

export const config = { matcher: ['/((?!api|images|css|js|icons|_next).*)'] };

export default async function middleware(request) {
  const url = new URL(request.url);

  // Only inject into HTML pages
  if (!url.pathname.endsWith('.html') && url.pathname !== '/') {
    return;
  }

  const env = {
    FA:  process.env.FIREBASE_API_KEY            || '',
    FAD: process.env.FIREBASE_AUTH_DOMAIN        || '',
    FP:  process.env.FIREBASE_PROJECT_ID         || '',
    FS:  process.env.FIREBASE_STORAGE_BUCKET     || '',
    FM:  process.env.FIREBASE_MESSAGING_SENDER_ID || '',
    FID: process.env.FIREBASE_APP_ID             || '',
    FN:  process.env.COUNSELLOR_FUNCTION_URL     || '',
  };

  const script = `<script>window.__E5__=${JSON.stringify(env)};</script>`;

  // Fetch the original HTML
  const response = await fetch(request);
  const html     = await response.text();

  // Inject before </head>
  const injected = html.replace('</head>', `${script}\n</head>`);

  return new Response(injected, {
    status:  response.status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
