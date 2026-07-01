// nav.js — Fundo Local Danmo
function renderNavbar(paginaActiva) {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const paginas = [
    { id: 'dashboard',   label: '🏠 Início',       href: 'dashboard.html' },
    { id: 'membros',     label: '👥 Membros',       href: 'membros.html' },
    { id: 'emprestimos', label: '💸 Empréstimos',   href: 'emprestimos.html' },
    { id: 'descontos',   label: '📅 Descontos',     href: 'descontos.html' },
    { id: 'relatorios',  label: '📊 Relatórios',    href: 'relatorios.html' },
  ];

  const sessao = AUTH.init();

  nav.innerHTML = `
    <a href="dashboard.html" class="navbar-brand">
      <span class="logo-box">FL</span>
      <span>
        <div class="brand-name">Fundo Local</div>
        <div class="brand-sub">Danmo SS</div>
      </span>
    </a>
    <div class="navbar-menu">
      ${paginas.map(p => `<a href="${p.href}" class="${paginaActiva === p.id ? 'active' : ''}">${p.label}</a>`).join('')}
      <button id="btn-tema-header" onclick="togglePainelTemas()">🎨</button>
    </div>
    <div class="navbar-user">
      <span>${sessao ? sessao.nome || sessao.usuario : ''}</span>
      <button class="btn-sair" onclick="AUTH.logout()">Sair</button>
    </div>
  `;
}
