/**
 * Firebase config — reads keys from window.__E5__ injected by Vercel Edge Middleware.
 * Keys are never hardcoded here. See vercel.json for the middleware setup.
 */

import { initializeApp }  from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getFirestore }   from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { getAuth }        from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const cfg = window.__E5__ || {};

const firebaseConfig = {
  apiKey:            cfg.FA  || '',
  authDomain:        cfg.FAD || '',
  projectId:         cfg.FP  || '',
  storageBucket:     cfg.FS  || '',
  messagingSenderId: cfg.FM  || '',
  appId:             cfg.FID || '',
};

// Warn in dev if keys are missing
if (!firebaseConfig.projectId) {
  console.warn('[Edge5] Firebase config missing — add __E5__ keys via Vercel env + middleware.');
}

const app  = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = getAuth(app);

/** Base URL for the Claude API proxy (Firebase Function) */
export const COUNSELLOR_API = cfg.FN || 'https://asia-south1-edge5-prod.cloudfunctions.net/counsellor';

export default app;
