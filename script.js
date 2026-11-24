// Troque pelos dados reais do Rafael Moreira
const EMAIL_CORPORATIVO = "rafael.moreira@dekacron.com.br";
const ASSUNTO_EMAIL = "Contato Comercial - Linha Dekacron";
const CORPO_EMAIL = "Olá Rafael,\n\nVim pela sua página de apresentação e gostaria de conversar sobre atendimento comercial e produtos Dekacron.\n\nAtenciosamente,";

const WHATSAPP_CONTATO = "5511987488840";
const WHATSAPP_EXIBICAO = "(11) 98748-8840";
const MENSAGEM_WPP = "Olá! Vim pela página e gostaria de falar sobre o atendimento comercial Dekacron.";

const INSTAGRAM_HANDLE = "@rstec_web";
const INSTAGRAM_URL = "https://www.instagram.com/rstec_web/";

const FACEBOOK_LABEL = "Global Tech Web";
const FACEBOOK_URL = "https://www.facebook.com/";

// Imagem enviada com os 4 Organizadores (ORG-45, ORG-50, ORG-75 e ORG-80).
const IMAGEM_CATALOGO_ORGANIZADORES = "./Captura de tela 2026-11-24 160739_2.png";

// Imagem enviada com as logos dos clientes/marcas.
const IMAGEM_CLIENTES_MARCAS = "./Captura de tela 2026-11-24 155703_3.png";

// Intervalo de rotatividade automática do carrossel de produtos (3 segundos)
const INTERVALO_CARROSSEL_MS = 3000;

const ORGANIZADORES_MODELOS = [
  {
    id: "org-45",
    nome: "ORG-45",
    descricao: "Volume: 7 litros • Comprimento: 41 cm • Largura: 29 cm • Altura: 10 cm • 10 unidades por pacote (BPA Free).",
    imagemUrl: "https://static.casaebar.com.br/public/casaebar/imagens/produtos/organizador-7l-org-45-dekacron-64e4cdfcd8085.png",
    origem: IMAGEM_CATALOGO_ORGANIZADORES,
    box: [0.04, 0.19, 0.38, 0.24]
  },
  {
    id: "org-50",
    nome: "ORG-50",
    descricao: "Volume: 11 litros • Comprimento: 41 cm • Largura: 29 cm • Altura: 12,5 cm • 10 unidades por pacote (BPA Free).",
    imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqu1jHqW_7Km4_IkNjMgIdr0SRaUonoDTCrFAMl0Uq5A&s=10",
    origem: IMAGEM_CATALOGO_ORGANIZADORES,
    box: [0.51, 0.19, 0.41, 0.24]
  },
  {
    id: "org-75",
    nome: "ORG-75",
    descricao: "Volume: 16 litros • Comprimento: 53,5 cm • Largura: 32,8 cm • Altura: 12,1 cm • 6 unidades por pacote (BPA Free).",
    imagemUrl: "https://plasvale.cdn.magazord.com.br/img/2025/10/produto/7251/1212.png?ims=fit-in/600x600/filters:fill(white)",
    origem: IMAGEM_CATALOGO_ORGANIZADORES,
    box: [0.04, 0.58, 0.42, 0.25]
  },
  {
    id: "org-80",
    nome: "ORG-80",
    descricao: "Volume: 26 litros • Comprimento: 53,5 cm • Largura: 32,8 cm • Altura: 18 cm • 6 unidades por pacote (BPA Free).",
    imagemUrl: "https://http2.mlstatic.com/D_NQ_NP_872808-MLA99560247466_122025-F.jpg",
    origem: IMAGEM_CATALOGO_ORGANIZADORES,
    box: [0.48, 0.54, 0.47, 0.29]
  }
];

const MARCAS_CLIENTES = [
  { id: "burger-king", nome: "Burger King", origem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdg1w7oZm7cGboQSLbyzQyjbIQoXsLS50G6rBJJfdEuA&s=10", box: [0.02, 0.02, 0.10, 0.20] },
  { id: "platinox", nome: "Platinox", origem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQix4JnfvdAP2kp0LZcVDgZn1DeKYekmTSCdNPOcm7ug&s=10", box: [0.21, 0.02, 0.13, 0.20] },
  { id: "frigo", nome: "Frigo", origem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD9E008SzBNViyFwft9BduSQJ12WtNNceBJPI5qyImAA&s=10", box: [0.43, 0.02, 0.11, 0.20] },
  { id: "habibs", nome: "Habib's", origem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BiIfwW6nltIRG6kVET4au0u6TzsDPF2PXAz9gale8Q&s=10", box: [0.64, 0.02, 0.13, 0.20] },
  { id: "rossi", nome: "Rossi", origem: IMAGEM_CLIENTES_MARCAS, box: [0.85, 0.02, 0.13, 0.20] },

  { id: "casa-do-pao-de-queijo", nome: "Casa do Pão de Queijo", origem: IMAGEM_CLIENTES_MARCAS, box: [0.01, 0.27, 0.12, 0.20] },
  { id: "gendai", nome: "Gendai", origem: IMAGEM_CLIENTES_MARCAS, box: [0.23, 0.27, 0.09, 0.20] },
  { id: "ragazzo", nome: "Ragazzo!", origem: IMAGEM_CLIENTES_MARCAS, box: [0.43, 0.27, 0.11, 0.20] },
  { id: "madero", nome: "Madero", origem: IMAGEM_CLIENTES_MARCAS, box: [0.64, 0.27, 0.13, 0.20] },
  { id: "grupo-risotolandia", nome: "Grupo Risotolândia", origem: IMAGEM_CLIENTES_MARCAS, box: [0.85, 0.27, 0.14, 0.20] },

  { id: "divino-fogao", nome: "Divino Fogão", origem: IMAGEM_CLIENTES_MARCAS, box: [0.01, 0.52, 0.11, 0.20] },
  { id: "razek", nome: "Razek", origem: IMAGEM_CLIENTES_MARCAS, box: [0.22, 0.52, 0.11, 0.20] },
  { id: "tambasa", nome: "Tambasa Atacadistas", origem: IMAGEM_CLIENTES_MARCAS, box: [0.43, 0.52, 0.11, 0.20] },
  { id: "fast", nome: "Fast Gôndolas & Check-outs", origem: IMAGEM_CLIENTES_MARCAS, box: [0.64, 0.52, 0.13, 0.20] },
  { id: "bobs", nome: "Bob's", origem: IMAGEM_CLIENTES_MARCAS, box: [0.85, 0.52, 0.13, 0.20] },

  { id: "loja-da-vo", nome: "Loja da Vó", origem: IMAGEM_CLIENTES_MARCAS, box: [0.03, 0.77, 0.08, 0.20] },
  { id: "victoria-loucas", nome: "Victoria Louças", origem: IMAGEM_CLIENTES_MARCAS, box: [0.23, 0.77, 0.09, 0.20] },
  { id: "rebal", nome: "Rebal", origem: IMAGEM_CLIENTES_MARCAS, box: [0.43, 0.77, 0.11, 0.20] },
  { id: "gn-grassoeti-nascimento", nome: "GN Grassoeti & Nascimento", origem: IMAGEM_CLIENTES_MARCAS, box: [0.64, 0.77, 0.13, 0.20] },
  { id: "ormimaq", nome: "Ormimaq", origem: IMAGEM_CLIENTES_MARCAS, box: [0.85, 0.77, 0.13, 0.20] }
];

function recortarImagem(imgEl, box) {
  if (!imgEl || !imgEl.naturalWidth || !imgEl.naturalHeight || !box) return null;
  const [nx, ny, nw, nh] = box;
  const sx = Math.max(0, Math.floor(nx * imgEl.naturalWidth));
  const sy = Math.max(0, Math.floor(ny * imgEl.naturalHeight));
  const sw = Math.min(imgEl.naturalWidth - sx, Math.ceil(nw * imgEl.naturalWidth));
  const sh = Math.min(imgEl.naturalHeight - sy, Math.ceil(nh * imgEl.naturalHeight));

  if (sw <= 0 || sh <= 0) return null;
  const canvas = document.createElement("canvas");
  canvas.width = sw;
  canvas.height = sh;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.drawImage(imgEl, sx, sy, sw, sh, 0, 0, sw, sh);
  return canvas.toDataURL("image/png");
}

function abrirEmailCorporativo() {
  const mailtoUrl = `mailto:${EMAIL_CORPORATIVO}?subject=${encodeURIComponent(ASSUNTO_EMAIL)}&body=${encodeURIComponent(CORPO_EMAIL)}`;
  window.location.href = mailtoUrl;
}

function enviarWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP_CONTATO}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Botão E-mail Corporativo (destaque)
  const btnEmail = document.getElementById("btnEmailDestaque");
  if (btnEmail) {
    btnEmail.addEventListener("click", (e) => {
      e.preventDefault();
      abrirEmailCorporativo();
    });
  }

  // 2. Botão redondo fixo WhatsApp
  const btnWpp = document.getElementById("btnWppFlutuante");
  if (btnWpp) {
    btnWpp.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp(MENSAGEM_WPP);
    });
  }

  // 3. Seção Contatos (E-mail Corporativo, Instagram, Facebook e WhatsApp)
  const textoEmailContato = document.getElementById("textoEmailContato");
  if (textoEmailContato) textoEmailContato.textContent = EMAIL_CORPORATIVO;

  const linkContatoEmail = document.getElementById("linkContatoEmail");
  if (linkContatoEmail) {
    linkContatoEmail.setAttribute("href", `mailto:${EMAIL_CORPORATIVO}`);
    linkContatoEmail.addEventListener("click", (e) => {
      e.preventDefault();
      abrirEmailCorporativo();
    });
  }

  const textoInstagramContato = document.getElementById("textoInstagramContato");
  if (textoInstagramContato) textoInstagramContato.textContent = INSTAGRAM_HANDLE;

  const linkContatoInstagram = document.getElementById("linkContatoInstagram");
  if (linkContatoInstagram) {
    linkContatoInstagram.setAttribute("href", INSTAGRAM_URL);
  }

  const textoFacebookContato = document.getElementById("textoFacebookContato");
  if (textoFacebookContato) textoFacebookContato.textContent = FACEBOOK_LABEL;

  const linkContatoFacebook = document.getElementById("linkContatoFacebook");
  if (linkContatoFacebook) {
    linkContatoFacebook.setAttribute("href", FACEBOOK_URL);
  }

  const textoWppContato = document.getElementById("textoWppContato");
  if (textoWppContato) textoWppContato.textContent = WHATSAPP_EXIBICAO;

  const linkContatoWpp = document.getElementById("linkContatoWpp");
  if (linkContatoWpp) {
    linkContatoWpp.setAttribute("href", `https://wa.me/${WHATSAPP_CONTATO}`);
    linkContatoWpp.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp(MENSAGEM_WPP);
    });
  }

  // 4. Produtos em formato de Carrossel com rotatividade a cada 3 segundos
  const areaOrganizadores = document.getElementById("areaOrganizadores");
  const cacheImgs = new Map();
  const imgsPendentes = new Map();

  function aplicarRecorteFallback(item, imgEl) {
    imgEl.src = item.origem;
    const chave = `${item.origem}::${JSON.stringify(item.box)}`;
    if (!imgsPendentes.has(chave)) imgsPendentes.set(chave, []);
    imgsPendentes.get(chave).push(imgEl);

    const jaCarregada = cacheImgs.get(item.origem);
    if (jaCarregada && jaCarregada.complete && jaCarregada.naturalWidth > 0) {
      const recorte = recortarImagem(jaCarregada, item.box);
      if (recorte) imgEl.src = recorte;
      return;
    }

    if (!jaCarregada) {
      const novaImg = new Image();
      novaImg.onload = () => {
        imgsPendentes.forEach((lista, k) => {
          const [orig, boxStr] = k.split("::");
          if (orig === item.origem && boxStr) {
            const rec = recortarImagem(novaImg, JSON.parse(boxStr));
            if (rec) lista.forEach((el) => { el.src = rec; });
          }
        });
      };
      novaImg.src = item.origem;
      cacheImgs.set(item.origem, novaImg);
    }
  }

  function aplicarImgItem(item, imgEl, campoUrl = "imagemUrl") {
    const urlDireta = item[campoUrl];
    if (urlDireta) {
      imgEl.onerror = () => {
        imgEl.onerror = null;
        aplicarRecorteFallback(item, imgEl);
      };
      imgEl.src = urlDireta;
      return;
    }
    aplicarRecorteFallback(item, imgEl);
  }

  if (areaOrganizadores) {
    areaOrganizadores.innerHTML = "";

    const carrossel = document.createElement("div");
    carrossel.className = "carrossel-produtos";

    const viewport = document.createElement("div");
    viewport.className = "carrossel-viewport";

    const trilho = document.createElement("div");
    trilho.className = "carrossel-trilho";

    const totalSlides = ORGANIZADORES_MODELOS.length;
    let indiceAtual = 0;
    let timerRotatividade = null;

    ORGANIZADORES_MODELOS.forEach((mod, idx) => {
      const slide = document.createElement("article");
      slide.className = "carrossel-slide";

      const fotoBox = document.createElement("div");
      fotoBox.className = "carrossel-foto-box";
      const img = document.createElement("img");
      img.alt = mod.nome;
      aplicarImgItem(mod, img, "imagemUrl");
      fotoBox.appendChild(img);

      const info = document.createElement("div");
      info.className = "carrossel-info";

      const contador = document.createElement("span");
      contador.className = "carrossel-contador";
      contador.textContent = `Modelo ${idx + 1} de ${totalSlides}`;

      const titulo = document.createElement("h3");
      titulo.className = "carrossel-titulo";
      titulo.textContent = mod.nome;

      const desc = document.createElement("p");
      desc.className = "carrossel-desc";
      desc.textContent = mod.descricao;

      const btnCotar = document.createElement("button");
      btnCotar.type = "button";
      btnCotar.className = "btn-cotar-carrossel";
      btnCotar.textContent = "Cotar no WhatsApp";
      btnCotar.addEventListener("click", () => {
        enviarWhatsApp(`Olá! Gostaria de cotar o organizador *${mod.nome}* (${mod.descricao}).`);
      });

      info.appendChild(contador);
      info.appendChild(titulo);
      info.appendChild(desc);
      info.appendChild(btnCotar);

      slide.appendChild(fotoBox);
      slide.appendChild(info);
      trilho.appendChild(slide);
    });

    viewport.appendChild(trilho);

    const controles = document.createElement("div");
    controles.className = "carrossel-controles";

    const setas = document.createElement("div");
    setas.className = "carrossel-setas";

    const btnAnterior = document.createElement("button");
    btnAnterior.type = "button";
    btnAnterior.className = "btn-seta-carrossel";
    btnAnterior.setAttribute("aria-label", "Produto anterior");
    btnAnterior.textContent = "←";

    const btnProximo = document.createElement("button");
    btnProximo.type = "button";
    btnProximo.className = "btn-seta-carrossel";
    btnProximo.setAttribute("aria-label", "Próximo produto");
    btnProximo.textContent = "→";

    setas.appendChild(btnAnterior);
    setas.appendChild(btnProximo);

    const indicadores = document.createElement("div");
    indicadores.className = "carrossel-indicadores";

    const botoesIndicador = ORGANIZADORES_MODELOS.map((mod, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "indicador-slide" + (idx === 0 ? " ativo" : "");
      dot.setAttribute("aria-label", `Ir para ${mod.nome}`);
      dot.addEventListener("click", () => {
        irParaSlide(idx);
        reiniciarRotatividade();
      });
      indicadores.appendChild(dot);
      return dot;
    });

    function irParaSlide(novoIndice) {
      indiceAtual = (novoIndice + totalSlides) % totalSlides;
      trilho.style.transform = `translate3d(-${indiceAtual * 100}%, 0, 0)`;
      botoesIndicador.forEach((dot, i) => {
        dot.classList.toggle("ativo", i === indiceAtual);
      });
    }

    function pararRotatividade() {
      if (timerRotatividade) {
        clearInterval(timerRotatividade);
        timerRotatividade = null;
      }
    }

    function iniciarRotatividade() {
      pararRotatividade();
      if (totalSlides > 1) {
        timerRotatividade = setInterval(() => {
          irParaSlide(indiceAtual + 1);
        }, INTERVALO_CARROSSEL_MS);
      }
    }

    function reiniciarRotatividade() {
      iniciarRotatividade();
    }

    btnAnterior.addEventListener("click", () => {
      irParaSlide(indiceAtual - 1);
      reiniciarRotatividade();
    });

    btnProximo.addEventListener("click", () => {
      irParaSlide(indiceAtual + 1);
      reiniciarRotatividade();
    });

    carrossel.addEventListener("mouseenter", pararRotatividade);
    carrossel.addEventListener("mouseleave", iniciarRotatividade);
    carrossel.addEventListener("focusin", pararRotatividade);
    carrossel.addEventListener("focusout", iniciarRotatividade);

    controles.appendChild(setas);
    controles.appendChild(indicadores);

    carrossel.appendChild(viewport);
    carrossel.appendChild(controles);
    areaOrganizadores.appendChild(carrossel);

    iniciarRotatividade();
  }

  // 5. Seção Nossos Clientes (carrossel lateral de 4 cards, sem expandir para baixo)
  const trilhoClientes = document.getElementById("trilhoClientes");
  const viewportClientes = document.querySelector(".clientes-carrossel-viewport");
  const btnClientesAnterior = document.getElementById("btnClientesAnterior");
  const btnClientesProximo = document.getElementById("btnClientesProximo");

  if (trilhoClientes && viewportClientes) {
    trilhoClientes.innerHTML = "";

    MARCAS_CLIENTES.forEach((marca) => {
      const card = document.createElement("article");
      card.className = "marca-card";

      const logoBox = document.createElement("div");
      logoBox.className = "marca-logo-box";

      const imgLogo = document.createElement("img");
      imgLogo.alt = marca.nome;
      aplicarImgItem(marca, imgLogo, "logoUrl");
      logoBox.appendChild(imgLogo);

      const nome = document.createElement("span");
      nome.className = "marca-nome";
      nome.textContent = marca.nome;

      const linhaDetalhe = document.createElement("span");
      linhaDetalhe.className = "marca-linha-detalhe";
      linhaDetalhe.setAttribute("aria-hidden", "true");

      card.appendChild(logoBox);
      card.appendChild(nome);
      card.appendChild(linhaDetalhe);
      trilhoClientes.appendChild(card);
    });

    let indiceCliente = 0;

    function obterVisiveis() {
      const valor = getComputedStyle(viewportClientes).getPropertyValue("--visiveis").trim();
      const num = parseInt(valor, 10);
      return Number.isNaN(num) || num < 1 ? 4 : num;
    }

    function obterMaximoIndice() {
      const visiveis = obterVisiveis();
      return Math.max(0, MARCAS_CLIENTES.length - visiveis);
    }

    function atualizarCarrosselClientes() {
      const maxIdx = obterMaximoIndice();
      if (indiceCliente > maxIdx) indiceCliente = 0;
      if (indiceCliente < 0) indiceCliente = maxIdx;

      const cards = trilhoClientes.querySelectorAll(".marca-card");
      if (!cards.length) return;

      const primeiroCard = cards[0];
      const larguraCard = primeiroCard.getBoundingClientRect().width;
      const gapStr = getComputedStyle(viewportClientes).getPropertyValue("--gap").trim();
      const gap = parseFloat(gapStr) || 16;

      const deslocamento = indiceCliente * (larguraCard + gap);
      trilhoClientes.style.transform = `translate3d(-${deslocamento}px, 0, 0)`;
    }

    if (btnClientesAnterior) {
      btnClientesAnterior.addEventListener("click", () => {
        const maxIdx = obterMaximoIndice();
        indiceCliente = indiceCliente <= 0 ? maxIdx : indiceCliente - 1;
        atualizarCarrosselClientes();
      });
    }

    if (btnClientesProximo) {
      btnClientesProximo.addEventListener("click", () => {
        const maxIdx = obterMaximoIndice();
        indiceCliente = indiceCliente >= maxIdx ? 0 : indiceCliente + 1;
        atualizarCarrosselClientes();
      });
    }

    window.addEventListener("resize", atualizarCarrosselClientes, { passive: true });
    requestAnimationFrame(atualizarCarrosselClientes);
  }

  // 6. Interação sutil na arte orbital ao redor da foto (parallax leve)
  const palcoFoto = document.getElementById("palcoFoto");
  const prefereMenosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (palcoFoto && !prefereMenosMovimento) {
    palcoFoto.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const rect = palcoFoto.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      palcoFoto.style.setProperty("--px", `${(relX * 14).toFixed(1)}px`);
      palcoFoto.style.setProperty("--py", `${(relY * 14).toFixed(1)}px`);
    });

    palcoFoto.addEventListener("pointerleave", () => {
      palcoFoto.style.setProperty("--px", "0px");
      palcoFoto.style.setProperty("--py", "0px");
    });
  }

  // 7. Revela os blocos com suavidade conforme entram na tela
  const elementosAnimados = document.querySelectorAll("[data-animar]");

  function revelarVisiveis() {
    const alturaJanela = window.innerHeight || document.documentElement.clientHeight;
    elementosAnimados.forEach((el) => {
      if (el.classList.contains("visivel")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= alturaJanela * 0.95) {
        el.classList.add("visivel");
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    elementosAnimados.forEach((el) => observador.observe(el));
    revelarVisiveis();
    window.addEventListener("scroll", revelarVisiveis, { passive: true });
    window.addEventListener("resize", revelarVisiveis, { passive: true });
  } else {
    elementosAnimados.forEach((el) => el.classList.add("visivel"));
  }
});