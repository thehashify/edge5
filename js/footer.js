/* Shared footer — injects HTML */

(function () {
  const FOOTER_HTML = `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <a href="/index.html" class="e5-logo" aria-label="Edge5 home">
        <img src="/images/logo/logo-dark.svg" alt="Edge5" class="e5-logo__svg">
        <span class="e5-logo__attribution">A The Hashify Venture</span>
      </a>
      <p class="site-footer__tagline">Your Edge in Every Decision</p>
      <div class="site-footer__social" aria-label="Social media">
        <a href="#" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="#" aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2"/>
            <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0"/>
          </svg>
        </a>
        <a href="#" aria-label="Twitter / X">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
          </svg>
        </a>
      </div>
    </div>

    <nav class="site-footer__nav" aria-label="Pages">
      <span class="site-footer__nav-heading">Explore</span>
      <a href="/colleges.html">Colleges</a>
      <a href="/counsellor.html">AI Counsellor</a>
      <a href="/compare.html">Compare</a>
      <a href="/blog.html">Blog</a>
    </nav>

    <nav class="site-footer__nav" aria-label="Streams">
      <span class="site-footer__nav-heading">Streams</span>
      <a href="/counsellor.html?stream=mba">MBA</a>
      <a href="/counsellor.html?stream=engineering">Engineering</a>
      <a href="/counsellor.html?stream=medical">Medical</a>
      <a href="/counsellor.html?stream=law">Law</a>
    </nav>

    <nav class="site-footer__nav" aria-label="Company">
      <span class="site-footer__nav-heading">Company</span>
      <a href="/index.html#about">About</a>
      <a href="/index.html#contact">Contact</a>
      <a href="/privacy.html">Privacy Policy</a>
      <a href="/terms.html">Terms</a>
    </nav>
  </div>

  <div class="container">
    <div class="site-footer__bottom">
      <p class="site-footer__copyright">© 2025 Edge5 | edge5.in</p>
      <p class="site-footer__hashify">
        A <a href="https://thehashify.com" target="_blank" rel="noopener">The Hashify</a> Venture
      </p>
    </div>
  </div>
</footer>
`;

  function init() {
    const mount = document.getElementById('footer-mount');
    if (!mount) return;
    mount.insertAdjacentHTML('beforebegin', FOOTER_HTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
