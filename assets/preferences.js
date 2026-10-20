(() => {
  const dictionaries = window.DE_LOCALES;
  const language = document.getElementById('language');
  const theme = document.getElementById('theme');
  const notice = document.querySelector('.translation-notice');
  const base = new URL('../', document.querySelector('script[src$="assets/preferences.js"]').src);
  const pagePath = location.pathname.slice(base.pathname.length).replace(/\/$/, '/index.html') || 'index.html';
  const registry = fetch(new URL('assets/content-translations.json', base)).then(r => {
    if (!r.ok) throw new Error('Translation registry unavailable');
    return r.json();
  }).catch(() => ({}));
  let locale = new URL(location.href).searchParams.get('lang');
  if (!dictionaries[locale]) {
    try { locale = localStorage.getItem('de-language'); } catch (_) {}
  }
  if (!dictionaries[locale]) locale = 'es';
  function apply(value) {
    locale = value;
    language.value = locale;
    // Main content retains its actual language, independently of the interface.
    document.documentElement.lang = locale;
    document.querySelector('.preferences').lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = dictionaries[locale][el.dataset.i18n] || dictionaries.es[el.dataset.i18n];
      el.lang = locale;
    });
    notice.hidden = locale === document.querySelector('main').lang;
    notice.lang = locale;
    notice.textContent = dictionaries[locale].pending;
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) return;
      const url = new URL(href, location.href);
      if (url.origin !== location.origin || !url.pathname.startsWith(base.pathname)) return;
      url.searchParams.set('lang', locale);
      link.href = url.href;
    });
  }
  language.addEventListener('change', async () => {
    const selected = language.value;
    try { localStorage.setItem('de-language', selected); } catch (_) {}
    const entries = await registry;
    const entry = entries[pagePath];
    const translatedPath = entry?.translations[selected];
    if (translatedPath && translatedPath !== pagePath) {
      const target = new URL(translatedPath, base);
      target.searchParams.set('lang', selected);
      target.hash = location.hash;
      location.assign(target.href);
      return;
    }
    const url = new URL(location.href);
    url.searchParams.set('lang', selected);
    history.replaceState(null, '', url);
    apply(selected);
  });
  theme.value = window.DE_THEME.get();
  theme.addEventListener('change', () => window.DE_THEME.set(theme.value));
  apply(locale);
})();
