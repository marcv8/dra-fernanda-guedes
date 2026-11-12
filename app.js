/* Dra. Fernanda Guedes: header, footer, botao de WhatsApp e lista de procedimentos compartilhados */

const CONTATO = {
  whatsapp: '5511994703531',
  whatsappTexto: '(11) 99470-3531',
  instagram: 'dra.fernanda.guedes',
  // CONFIRM: numero do CRO-SP da Dra. Fernanda
  cro: 'CRO-SP 00000',
  // CONFIRM: endereco exato da sala alugada
  bairro: 'Paraíso, São Paulo, SP',
};

const WA_MSG = 'Olá, Dra. Fernanda! Vi o seu site e gostaria de agendar uma avaliação.';
const waLink = (msg = WA_MSG) => `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`;

// CONFIRM: lista de procedimentos que a Dra. Fernanda realmente oferece
const SERVICES = [
  { id: 'toxina', nome: 'Toxina botulínica (Botox)', alta: true, img: 'img/procedimento-facial.jpg',
    curto: 'Suaviza as linhas de expressão da testa, entre as sobrancelhas e ao redor dos olhos.',
    desc: 'Relaxa os músculos que formam as rugas de expressão, deixando o rosto com aspecto mais descansado. Também pode ser usada no tratamento do bruxismo (ranger os dentes) e do sorriso gengival.',
    tempo: '20 a 30 minutos', duracao: 'em média 4 a 6 meses' },
  { id: 'labial', nome: 'Preenchimento labial', alta: true,
    curto: 'Contorno, volume e hidratação para os lábios, com resultado natural.',
    desc: 'Feito com ácido hialurônico, devolve volume, melhora o contorno e corrige assimetrias. O planejamento respeita o formato do seu rosto para um resultado leve e harmônico.',
    tempo: '30 a 45 minutos', duracao: 'em média 8 a 12 meses' },
  { id: 'fios', nome: 'Fios de PDO', alta: true,
    curto: 'Fios absorvíveis que sustentam a pele e estimulam o colágeno.',
    desc: 'Os fios de PDO são colocados sob a pele para dar sustentação e estimular a produção natural de colágeno. Ajudam na flacidez leve e na definição do contorno do rosto.',
    tempo: '40 a 60 minutos', duracao: 'em média 12 a 18 meses' },
  { id: 'bioestimulador', nome: 'Bioestimulador de colágeno', alta: true,
    curto: 'Estimula o seu próprio colágeno para mais firmeza, aos poucos.',
    desc: 'Substâncias como o ácido poli L lático e a hidroxiapatita de cálcio estimulam o corpo a produzir colágeno novo. O resultado aparece de forma gradual e natural, melhorando firmeza e flacidez.',
    tempo: '30 a 45 minutos', duracao: 'em média 18 a 24 meses' },
  { id: 'skinbooster', nome: 'Skinbooster', alta: true,
    curto: 'Hidratação profunda para uma pele com mais viço e textura uniforme.',
    desc: 'Microinjeções de ácido hialurônico que hidratam a pele por dentro. Indicado para pele opaca, linhas finas e para quem quer uma pele com aspecto saudável e iluminado.',
    tempo: '30 minutos', duracao: 'protocolo de 2 a 3 sessões' },
  { id: 'fullface', nome: 'Harmonização full face', alta: true, img: 'img/procedimento-queixo.jpg',
    curto: 'Planejamento do rosto inteiro para um resultado equilibrado e natural.',
    desc: 'Combina procedimentos a partir de uma análise completa do rosto. O foco é a naturalidade: pequenos ajustes em pontos estratégicos para valorizar a sua beleza, sem exageros.',
    tempo: 'definido na avaliação', duracao: 'varia conforme o plano' },
  { id: 'olheiras', nome: 'Preenchimento de olheiras',
    curto: 'Suaviza o aspecto cansado do olhar.',
    desc: 'Com ácido hialurônico, preenche a região abaixo dos olhos e reduz a sombra das olheiras profundas, deixando o olhar mais descansado.',
    tempo: '30 minutos', duracao: 'em média 12 meses' },
  { id: 'rino', nome: 'Rinomodelação',
    curto: 'Ajusta pequenas irregularidades do nariz, sem cirurgia.',
    desc: 'Usa ácido hialurônico para corrigir pequenas imperfeições, levantar a ponta ou alinhar o dorso do nariz, sem cortes e com retorno rápido à rotina.',
    tempo: '30 minutos', duracao: 'em média 12 a 18 meses' },
  { id: 'mandibula', nome: 'Contorno de mandíbula e mento',
    curto: 'Define o contorno do rosto e equilibra o perfil.',
    desc: 'O preenchimento da mandíbula e do queixo (mento) traz mais definição ao rosto e melhora o equilíbrio do perfil.',
    tempo: '40 minutos', duracao: 'em média 12 a 18 meses' },
  { id: 'papada', nome: 'Enzimas para papada',
    curto: 'Reduz a gordura localizada abaixo do queixo.',
    desc: 'Aplicações de enzimas que ajudam a quebrar a gordura localizada da papada, melhorando o contorno do pescoço. Normalmente feito em algumas sessões.',
    tempo: '20 minutos', duracao: 'protocolo de sessões' },
  { id: 'microagulhamento', nome: 'Microagulhamento',
    curto: 'Renova a pele e ajuda em marcas de acne, manchas e poros.',
    desc: 'Pequenas agulhas estimulam a renovação da pele e a produção de colágeno. Ajuda a melhorar textura, poros dilatados, manchas e marcas de acne.',
    tempo: '45 minutos', duracao: 'protocolo de sessões' },
];

// Imagem, indicacoes e tempo de resultado de cada procedimento
// CONFIRM: indicacoes e prazos sao medias de mercado, revisar com a Dra. Fernanda
const EXTRA = {
  toxina: { indicado: ['Rugas da testa', 'Linhas entre as sobrancelhas', 'Pés de galinha', 'Bruxismo'], resultado: 'Começa em 3 a 7 dias, completo em cerca de 15 dias' },
  labial: { indicado: ['Lábios finos', 'Assimetria', 'Contorno pouco definido', 'Lábios ressecados'], resultado: 'Imediato, resultado final após cerca de 15 dias' },
  fios: { indicado: ['Flacidez leve a moderada', 'Contorno do rosto', 'Prevenção do envelhecimento'], resultado: 'Sustentação imediata, colágeno novo em 2 a 3 meses' },
  bioestimulador: { indicado: ['Flacidez', 'Perda de firmeza', 'Pele fina', 'Prevenção'], resultado: 'Gradual, a partir de 30 a 90 dias' },
  skinbooster: { indicado: ['Pele opaca', 'Pele desidratada', 'Linhas finas', 'Textura irregular'], resultado: 'Mais viço em 2 a 4 semanas' },
  fullface: { indicado: ['Quem busca equilíbrio do rosto todo', 'Sinais de envelhecimento em várias regiões'], resultado: 'Conforme o plano montado na avaliação' },
  olheiras: { indicado: ['Olheiras profundas', 'Olhar cansado', 'Sulco abaixo dos olhos'], resultado: 'Imediato' },
  rino: { indicado: ['Dorso com pequenas irregularidades', 'Ponta do nariz caída', 'Pequenas assimetrias'], resultado: 'Imediato' },
  mandibula: { indicado: ['Contorno pouco definido', 'Queixo pequeno ou retraído', 'Perfil desequilibrado'], resultado: 'Imediato' },
  papada: { indicado: ['Gordura localizada abaixo do queixo', 'Contorno do pescoço pouco definido'], resultado: 'Progressivo, ao longo das sessões' },
  microagulhamento: { indicado: ['Marcas de acne', 'Poros dilatados', 'Manchas', 'Textura irregular'], resultado: 'Cerca de 30 dias após cada sessão' },
};
SERVICES.forEach(s => Object.assign(s, { img: `img/proc/${s.id}.jpg` }, EXTRA[s.id]));

// CONFIRM: combinacoes sugeridas, revisar com a Dra. Fernanda
const PROTOCOLS = [
  { nome: 'Rosto descansado', itens: ['toxina', 'skinbooster'], texto: 'Suaviza as linhas de expressão e devolve o viço da pele. Ideal para quem quer um ar mais leve e descansado.' },
  { nome: 'Firmeza e contorno', itens: ['bioestimulador', 'fios'], texto: 'Combina estímulo de colágeno e sustentação para tratar a flacidez e redefinir o contorno do rosto.' },
  { nome: 'Harmonia completa', itens: ['fullface', 'labial', 'mandibula'], texto: 'Planejamento do rosto inteiro, com ajustes em pontos estratégicos para um resultado equilibrado.' },
];

const ICON = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.56.94.95-3.47-.23-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.38 9.38 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35a11.3 11.3 0 0 0-3.32-8.02"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/></svg>',
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
};

const PAGES = [
  ['index', 'index.html', 'Início'],
  ['procedimentos', 'procedimentos.html', 'Procedimentos'],
  ['sobre', 'sobre.html', 'Sobre a Dra.'],
  ['contato', 'contato.html', 'Contato'],
];

function header(active) {
  const drop = `<div class="dropdown">${SERVICES.map(s => `<a href="procedimentos.html#${s.id}">${s.nome}</a>`).join('')}</div>`;
  const links = PAGES.map(([id, href, label]) => {
    const a = `<a href="${href}"${id === active ? ' class="active"' : ''}>${label}</a>`;
    return id === 'procedimentos' ? `<div class="has-drop">${a}${drop}</div>` : a;
  }).join('');
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Dra. Fernanda Guedes, página inicial">
        <img src="design-system/logos/logo-horizontal.svg" alt="Dra. Fernanda Guedes, Harmonização Orofacial" height="52">
      </a>
      <nav class="nav" id="nav">${links}</nav>
      <a class="header-phone" href="${waLink()}" target="_blank" rel="noopener">${ICON.phone}${CONTATO.whatsappTexto}</a>
      <a class="btn btn-primary header-cta" href="${waLink()}" target="_blank" rel="noopener">Agendar avaliação</a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">${ICON.menu}</button>
    </div>
  </header>`;
}

function footer() {
  const procs = SERVICES.slice(0, 6).map(s => `<li><a href="procedimentos.html#${s.id}">${s.nome}</a></li>`).join('');
  const pages = PAGES.map(([, href, label]) => `<li><a href="${href}">${label}</a></li>`).join('');
  return `
  <footer class="site-footer" data-theme="dark">
    <div class="container">
      <div class="footer-grid">
        <div>
          <img class="footer-logo" src="design-system/logos/logo-stacked-white.svg" alt="Dra. Fernanda Guedes">
          <div class="socials">
            <a href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.ig}</a>
            <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON.wa}</a>
          </div>
        </div>
        <div><h4>Procedimentos</h4><ul>${procs}</ul></div>
        <div><h4>Navegação</h4><ul>${pages}</ul></div>
        <div><h4>Contato</h4><ul>
          <li><a href="${waLink()}" target="_blank" rel="noopener">${CONTATO.whatsappTexto}</a></li>
          <li><a href="https://instagram.com/${CONTATO.instagram}" target="_blank" rel="noopener">@${CONTATO.instagram}</a></li>
          <li>${CONTATO.bairro}</li>
          <li>Atendimento com hora marcada</li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Dra. Fernanda Guedes · Cirurgiã-dentista · ${CONTATO.cro}</span>
        <span>Resultados podem variar de pessoa para pessoa. Agende uma avaliação.</span>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">${ICON.wa}</a>`;
}

function serviceCard(s, i) {
  return `
  <article class="card has-img reveal d${i % 3 + 1}">
    <a class="card-img" href="procedimentos.html#${s.id}" tabindex="-1"><img src="${s.img}" alt="${s.nome}" loading="lazy">
      ${s.alta ? '<span class="badge">Em alta</span>' : ''}</a>
    <div class="card-body">
      <div class="card-num">${String(i + 1).padStart(2, '0')}</div>
      <h3>${s.nome}</h3>
      <p>${s.curto}</p>
      <a class="card-link" href="procedimentos.html#${s.id}">Ver detalhes ${ICON.arrow}</a>
    </div>
  </article>`;
}

function serviceDetail(s, i) {
  const msg = `Olá, Dra. Fernanda! Gostaria de saber mais sobre ${s.nome}.`;
  return `
  <article class="proc reveal" id="${s.id}">
    <div class="proc-img"><img src="${s.img}" alt="${s.nome}" loading="lazy"><span class="proc-n">${String(i + 1).padStart(2, '0')}</span></div>
    <div class="proc-body">
      <h3>${s.nome}${s.alta ? ' <span class="badge">Em alta</span>' : ''}</h3>
      <p>${s.desc}</p>
      <div class="chips"><span class="chips-label">Indicado para:</span>${s.indicado.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      <dl class="facts">
        <div><dt>Sessão</dt><dd>${s.tempo}</dd></div>
        <div><dt>Resultado</dt><dd>${s.resultado}</dd></div>
        <div><dt>Duração do efeito</dt><dd>${s.duracao}</dd></div>
      </dl>
      <a class="btn btn-outline" href="${waLink(msg)}" target="_blank" rel="noopener">${ICON.wa} Tirar dúvidas no WhatsApp</a>
    </div>
  </article>`;
}

function protocolCard(p, i) {
  const itens = p.itens.map(id => SERVICES.find(s => s.id === id));
  const msg = `Olá, Dra. Fernanda! Tenho interesse no protocolo ${p.nome}.`;
  return `
  <article class="protocol reveal d${i + 1}">
    <div class="protocol-imgs">${itens.slice(0, 2).map(s => `<img src="${s.img}" alt="${s.nome}" loading="lazy">`).join('')}</div>
    <div class="protocol-body">
      <span class="eyebrow">Protocolo ${String(i + 1).padStart(2, '0')}</span>
      <h3>${p.nome}</h3>
      <p class="protocol-items">${itens.map(s => s.nome.split(' (')[0]).join(' + ')}</p>
      <p>${p.texto}</p>
      <a class="card-link" href="${waLink(msg)}" target="_blank" rel="noopener">Saber mais ${ICON.arrow}</a>
    </div>
  </article>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.body.insertAdjacentHTML('afterbegin', header(page));
  document.body.insertAdjacentHTML('beforeend', footer());

  // icones por data-icon
  document.querySelectorAll('[data-icon]').forEach(el => { el.insertAdjacentHTML('afterbegin', ICON[el.dataset.icon] || ''); });
  // links de WhatsApp por data-wa
  document.querySelectorAll('[data-wa]').forEach(el => {
    el.href = waLink(el.dataset.wa || WA_MSG); el.target = '_blank'; el.rel = 'noopener';
  });

  const featured = document.getElementById('featured-services');
  if (featured) featured.innerHTML = SERVICES.filter(s => s.alta).slice(0, 6).map(serviceCard).join('');
  const prot = document.getElementById('protocols');
  if (prot) prot.innerHTML = PROTOCOLS.map(protocolCard).join('');
  const all = document.getElementById('all-services');
  if (all) all.innerHTML = SERVICES.map(serviceDetail).join('');
  const select = document.getElementById('f-proc');
  if (select) select.insertAdjacentHTML('beforeend', SERVICES.map(s => `<option>${s.nome}</option>`).join(''));

  // menu mobile
  const toggle = document.querySelector('.menu-toggle'), nav = document.getElementById('nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', open);
  });

  // header com sombra ao rolar
  const hdr = document.querySelector('.site-header');
  const onScroll = () => hdr.classList.toggle('scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // revelar ao rolar
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // formulario: monta a mensagem e abre o WhatsApp (sem servidor)
  const form = document.getElementById('form-contato');
  if (form) form.addEventListener('submit', ev => {
    ev.preventDefault();
    const d = new FormData(form);
    const msg = `Olá, Dra. Fernanda! Meu nome é ${d.get('nome')}.` +
      (d.get('proc') ? ` Tenho interesse em: ${d.get('proc')}.` : '') +
      (d.get('periodo') ? ` Melhor período: ${d.get('periodo')}.` : '') +
      (d.get('msg') ? ` ${d.get('msg')}` : '');
    window.open(waLink(msg), '_blank', 'noopener');
  });
});
