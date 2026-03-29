/* ============================================================
   DADOS DO SITE — JEM ART
   Edite este arquivo para atualizar preços, links e textos. 
   Após salvar (commit), o site atualiza em ~1 minuto.
   ============================================================ */

const DADOS = {

  /* ── CONTATO & REDES ── */
  contato: {
    email:      "jemerco.creative@gmail.com",
    instagram:  "0jem0",
    artstation: "https://www.artstation.com/jem0",
    deviantart: "https://www.deviantart.com/0jem0",
    redbubble:  "https://www.redbubble.com/people/Jemerco/shop",
    montink:    "#", // substitua pelo link da sua loja Montink quando criar
  },

  /* ── PREÇOS EM REAIS (BRL) ── */
  brl: {
    capa: 300,

    editorial: {
      pequena:  50,
      media:    100,
      pb:       150,
      colorida: 190,
    },

    personagem: {
      sketch: { busto: 30,  meio: 40,  inteiro: 50  },
      cores:  { busto: 70,  meio: 80,  inteiro: 90  },
      flat:   { busto: 100, meio: 120, inteiro: 130 },
      full:   { busto: 200, meio: 225, inteiro: 250 },
    },

    folha: {
      bw:    { expr: 100, rosto: 25, pose: 30 },
      color: { expr: 150, rosto: 30, pose: 35 },
    },

    quadrinho: {
      pb:    75,
      color: 100,
    },

    extras: {
      detalhes: 20,
      cen_s:    50,
      cen_c:    100,
      ani_p:    50,
      ani_g:    80,
    },
  },

  /* ── PREÇOS EM DÓLAR (USD) ── */
  usd: {
    capa: 100,

    editorial: {
      pequena:  10,
      media:    20,
      pb:       35,
      colorida: 50,
    },

    personagem: {
      sketch: { busto: 10, meio: 12, inteiro: 15 },
      cores:  { busto: 20, meio: 25, inteiro: 30 },
      flat:   { busto: 30, meio: 35, inteiro: 40 },
      full:   { busto: 50, meio: 60, inteiro: 70 },
    },

    folha: {
      bw:    { expr: 30, rosto: 10, pose: 15 },
      color: { expr: 60, rosto: 15, pose: 20 },
    },

    quadrinho: {
      pb:    20,
      color: 30,
    },

    extras: {
      detalhes: 10,
      cen_s:    20,
      cen_c:    50,
      ani_p:    20,
      ani_g:    40,
    },
  },

  /* ── PORTFÓLIO ── */
  portfolio: [
    {
      title: "Nesta Archeron",
      meta:  "ACOTAR · Full Color",
      tags:  ["fanart"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/882c113b.jpg?v=85d73096",
    },
    {
      title: "Selestra Somniatis",
      meta:  "Princess of Souls · Full Color",
      tags:  ["capa"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery03/2f589bcc.jpg?v=85d73096",
    },
    {
      title: "Cardan & Oak",
      meta:  "Folk of the Air · Character",
      tags:  ["fanart"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/4597e79a.jpg?v=85d73096",
    },
    {
      title: "Elide & Lorcan",
      meta:  "Throne of Glass · Editorial",
      tags:  ["editorial"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/140883ab.jpg?v=85d73096",
    },
    {
      title: "Elain Archeron",
      meta:  "ACOTAR · Character",
      tags:  ["fanart"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/f1ff86e5.jpg?v=85d73096",
    },
    {
      title: "Editorial Spread",
      meta:  "Editorial · B&W",
      tags:  ["editorial"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery03/a65e5d7e.jpg?v=85d73096",
    },
    {
      title: "Comic Page",
      meta:  "Comic · B&W",
      tags:  ["comic"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery02/f07dc710.jpg?v=85d73096",
    },
    {
      title: "Reference Sheet",
      meta:  "Character · Ref Sheet",
      tags:  ["character_sheet"],
      img:   "https://jemcomissao.carrd.co/assets/images/gallery05/1ea4bafd.jpg?v=85d73096",
    },
  ],

  /* ── LOJA INTERNACIONAL (Redbubble) ── */
  loja_int: [
    {
      name:  "Nesta Archeron — ACOTAR",
      price: "from $14",
      link:  "https://www.redbubble.com/people/Jemerco/shop",
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/882c113b.jpg?v=85d73096",
    },
    {
      name:  "Selestra Somniatis",
      price: "from $14",
      link:  "https://www.redbubble.com/people/Jemerco/shop",
      img:   "https://jemcomissao.carrd.co/assets/images/gallery03/2f589bcc.jpg?v=85d73096",
    },
    {
      name:  "Cardan & Oak — Folk of the Air",
      price: "from $12",
      link:  "https://www.redbubble.com/people/Jemerco/shop",
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/4597e79a.jpg?v=85d73096",
    },
    {
      name:  "Elide & Lorcan — TOG",
      price: "from $12",
      link:  "https://www.redbubble.com/people/Jemerco/shop",
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/140883ab.jpg?v=85d73096",
    },
  ],

  /* ── LABELS DOS FILTROS DO PORTFÓLIO ── */
  /* Adicione aqui o nome de exibição para cada tag usada nas obras */
  tagLabels: {
    "capa":            { en: "Book Covers",      pt: "Capas de Livro"     },
    "character_sheet": { en: "Character Sheet",  pt: "Folha de Personagem"},
    "comic":           { en: "Comics",           pt: "Quadrinhos"         },
    "editorial":       { en: "Editorial",        pt: "Editorial"          },
    "fanart":          { en: "Fanarts",          pt: "Fanarts"            },
    "landscape":       { en: "Landscape",        pt: "Paisagem"           },
    "original":        { en: "Original",         pt: "Original"           },
  },

  /* ── POLÍTICAS / POLICIES ── */
  policies: {
    payment_en: "Wise or PayPal. 100% upfront or 50%+50% on delivery. Refunds only before final rendering starts.",
    payment_pt: "Pix. 100% na entrada ou 50%+50%. Reembolsos apenas se a finalização não tiver iniciado.",
    timeline_en: "1–4 weeks on average. Let me know in advance if you have a deadline.",
    timeline_pt: "Prazo médio de 1–4 semanas. Avise com antecedência se tiver uma data específica.",
    wips_en: "Progress updates sent for approval. Changes welcome until lineart is approved.",
    wips_pt: "Envio etapas para aprovação. Alterações bem-vindas até a lineart finalizada.",
  },

  /* ── SOBRE / ABOUT ── */
  sobre: {
    nome: "Jéssica Merco",
    bio_en: "Brazilian illustrator specializing in fantasy book fanart and original character design. Passionate about the bookish community and bringing literary characters to life — especially from ACOTAR, Throne of Glass, and The Folk of the Air.",
    bio_pt: "Ilustradora brasileira especializada em fanart de livros de fantasia e design de personagens originais. Apaixonada pela comunidade bookish e por dar vida a personagens literários — especialmente ACOTAR, Throne of Glass e The Folk of the Air.",
    tags: ["Fantasy Art", "Book Fanart", "Character Design", "Editorial", "Comic Pages"],
  },

  /* ── LOJA BRASIL (Montink) ── */
  loja_br: [
    {
      name:  "Nesta Archeron — ACOTAR",
      price: "a partir de R$39",
      link:  "#", // substitua pelo link Montink
      img:   "https://jemcomissao.carrd.co/assets/images/gallery01/882c113b.jpg?v=85d73096",
    },
    {
      name:  "Selestra Somniatis",
      price: "a partir de R$39",
      link:  "#", // substitua pelo link Montink
      img:   "https://jemcomissao.carrd.co/assets/images/gallery03/2f589bcc.jpg?v=85d73096",
    },
  ],

};
