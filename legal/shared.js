// Shared Dopima header + footer for legal pages
(function(){
  const WA = 'https://wa.link/sw90lb';
  const currentPage = document.body.dataset.page || '';

  const waIcon = `<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>`;

  const fabIcon = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>`;

  const header = `
  <nav class="nav">
    <div class="container-wide nav-inner">
      <a href="../Landing Page.html" aria-label="dopima"><img src="../assets/dopima-logo-pink.png" alt="dopima" class="logo" /></a>
      <div class="nav-links">
        <a href="../Landing Page.html#como-funciona">Cómo funciona</a>
        <a href="../Landing Page.html#planes">Planes</a>
        <a href="../Landing Page.html#proceso">Proceso</a>
        <a href="../Landing Page.html#faq">FAQ</a>
      </div>
      <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">
        ${waIcon}
        <span class="nav-cta-text">Hablar con Dopima</span>
      </a>
    </div>
  </nav>`;

  const pages = [
    {id:'terminos', label:'Términos y condiciones', num:'01', file:'terminos.html'},
    {id:'privacidad', label:'Política de privacidad', num:'02', file:'privacidad.html'},
    {id:'cookies', label:'Política de cookies', num:'03', file:'cookies.html'},
    {id:'datos', label:'Tratamiento de datos personales', num:'04', file:'datos-personales.html'}
  ];

  const legalNav = `
  <nav class="legal-nav" aria-label="Páginas legales">
    ${pages.map(p => `<a href="${p.file}" class="${currentPage===p.id?'active':''}"><small>${p.num}</small>${p.label}</a>`).join('')}
  </nav>`;

  const miniCta = `
  <section class="mini-cta">
    <div class="container">
      <h2>¿Dudas sobre nuestros términos?</h2>
      <p>Escríbenos por WhatsApp y te respondemos en minutos. Sin letra chica, sin formularios largos.</p>
      <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa">
        ${waIcon}
        Hablar por WhatsApp
      </a>
    </div>
  </section>`;

  const footer = `
  <footer>
    <div class="container-wide">
      <div class="foot-grid">
        <div>
          <a href="../Landing Page.html" aria-label="dopima"><img src="../assets/dopima-logo-white.png" alt="dopima" class="foot-logo" /></a>
          <p class="foot-tagline">Tu sistema comercial llave en mano. Software, implementación y operación — en un solo paquete.</p>
        </div>
        <div>
          <h4>Navegación</h4>
          <ul>
            <li><a href="../Landing Page.html#como-funciona">Cómo funciona</a></li>
            <li><a href="../Landing Page.html#planes">Planes</a></li>
            <li><a href="../Landing Page.html#proceso">Proceso</a></li>
            <li><a href="../Landing Page.html#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="terminos.html">Términos y condiciones</a></li>
            <li><a href="privacidad.html">Política de privacidad</a></li>
            <li><a href="cookies.html">Política de cookies</a></li>
            <li><a href="datos-personales.html">Tratamiento de datos personales</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 DOPIMA · MÉXICO</span>
        <span>DOPIMA.COM · CIUDAD DE MÉXICO</span>
      </div>
    </div>
  </footer>`;

  const fab = `<a href="${WA}" target="_blank" rel="noopener" class="fab-wa" aria-label="WhatsApp">${fabIcon}</a>`;

  // Inject
  document.getElementById('dopima-header').outerHTML = header;
  const navAnchor = document.getElementById('dopima-legal-nav');
  if (navAnchor) navAnchor.outerHTML = legalNav;
  const ctaAnchor = document.getElementById('dopima-mini-cta');
  if (ctaAnchor) ctaAnchor.outerHTML = miniCta;
  document.getElementById('dopima-footer').outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', fab);
})();
