/* Shared header — injects HTML and wires hamburger menu */

(function () {
  const HEADER_HTML = `
<header class="site-header" id="site-header">
  <div class="site-header__inner">
    <a href="/index.html" class="e5-logo" aria-label="Edge5 home">
      <img src="/images/logo/logo-dark.svg" alt="Edge5" class="e5-logo__svg">
      <span class="e5-logo__attribution">A The Hashify Venture</span>
    </a>

    <nav class="site-header__nav" aria-label="Main navigation">
      <a href="/colleges.html">Colleges</a>
      <a href="/blog.html">Blog</a>
      <a href="/index.html#about">About</a>
      <a href="/index.html#contact">Contact</a>
    </nav>

    <div class="site-header__cta">
      <a href="/counsellor.html" class="btn btn--gold btn--sm">Find My College</a>
    </div>

    <button class="site-header__hamburger" id="hamburger-btn" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div class="site-header__mobile-menu" id="mobile-menu" aria-hidden="true">
  <a href="/colleges.html">Colleges</a>
  <a href="/blog.html">Blog</a>
  <a href="/index.html#about">About</a>
  <a href="/index.html#contact">Contact</a>
  <a href="/counsellor.html" class="btn btn--gold">Find My College</a>
</div>
`;

  function init() {
    const mount = document.getElementById('header-mount');
    if (!mount) return;
    mount.insertAdjacentHTML('afterend', HEADER_HTML);

    const btn  = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', open);
      menu.setAttribute('aria-hidden', !open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.classList.remove('is-open');
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });

    // Mark active nav link
    const path = window.location.pathname;
    document.querySelectorAll('.site-header__nav a, .site-header__mobile-menu a').forEach(link => {
      if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace('/index.html', ''))) {
        link.classList.add('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
