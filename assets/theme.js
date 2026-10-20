/* Runs before rendering to avoid a flash of the wrong theme. */
(() => {
  let preference = 'system';
  try { preference = localStorage.getItem('de-theme') || 'system'; } catch (_) {}
  if (!['system', 'light', 'dark'].includes(preference)) preference = 'system';
  const media = matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    document.documentElement.dataset.theme = preference === 'system' ? (media.matches ? 'dark' : 'light') : preference;
  }
  window.DE_THEME = { get: () => preference, set(value) {
    preference = ['system', 'light', 'dark'].includes(value) ? value : 'system';
    try { localStorage.setItem('de-theme', preference); } catch (_) {}
    apply();
  }};
  media.addEventListener('change', apply);
  apply();
})();
