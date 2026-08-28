/**
 * KOOLD DESIGN REMINDER — Câmara Fria Editorial:
 * fundo azul-preto, ciano usado apenas como sinal de decisão, tipografia arejada,
 * trilho narrativo vertical e superfícies glaciais pontuais. Evitar elementos genéricos.
 */
import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  MoveUpRight,
  Snowflake,
  X,
} from "lucide-react";

const assets = {
  logo: `${import.meta.env.BASE_URL}images/koold-logo-2026-clean_dfe7c409.png`,
  hero: `${import.meta.env.BASE_URL}images/koold-hero-ice-network_93756006.jpg`,
  performance: `${import.meta.env.BASE_URL}images/koold-performance-visual_3aaf166b.jpg`,
  googleBusiness: `${import.meta.env.BASE_URL}images/koold-google-business_3ea18e9a.jpg`,
  strategy: `${import.meta.env.BASE_URL}images/koold-strategy_7b3c9307.jpg`,
  content: `${import.meta.env.BASE_URL}images/koold-content-studio_99366863.jpg`,
};

const navItems = [
  { label: "Método", href: "#metodo" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const countries = [
  { label: "Brasil", src: `${import.meta.env.BASE_URL}images/brazil_d4838f47.jpeg` },
  { label: "Estados Unidos", src: `${import.meta.env.BASE_URL}images/united-states_f336a8d9.jpeg` },
  { label: "Portugal", src: `${import.meta.env.BASE_URL}images/portugal_b7752c14.jpeg` },
  { label: "Espanha", src: `${import.meta.env.BASE_URL}images/spain_a92b5531.jpeg` },
  { label: "Inglaterra", src: `${import.meta.env.BASE_URL}images/england_86ead45f.jpeg` },
];

const faqItems = [
  {
    question: "Preciso investir nos anúncios além do valor do plano?",
    answer:
      "Sim. O investimento destinado às plataformas de anúncios é separado do valor referente aos serviços da Koold. Nossa equipe orientará sobre o investimento recomendado de acordo com o negócio e a estratégia.",
  },
  {
    question: "Vocês cuidam do Google Meu Negócio?",
    answer:
      "Sim. A gestão e a otimização da presença da empresa no Google fazem parte do plano indicado.",
  },
  {
    question: "Preciso ter fotos e vídeos?",
    answer:
      "Nossa equipe orientará quais materiais serão necessários de acordo com a estratégia e com as campanhas que serão desenvolvidas.",
  },
  {
    question: "Minha empresa nunca anunciou. Posso começar?",
    answer:
      "Sim. Nossa equipe poderá orientar desde a estruturação inicial até a ativação das campanhas.",
  },
  {
    question: "Existe contrato?",
    answer:
      "Trabalhamos com diferentes planos e períodos de contratação. Nossa equipe apresentará as opções e condições comerciais durante o atendimento.",
  },
  {
    question: "Vocês atendem empresas de qualquer lugar?",
    answer:
      "Sim. Nossa experiência inclui negócios no Brasil e no exterior. A viabilidade da estratégia será analisada de acordo com o segmento e o objetivo da empresa.",
  },
  {
    question: "Em quanto tempo vou ter resultados?",
    answer:
      "Marketing e mídia paga envolvem variáveis como segmento, região, oferta, investimento e concorrência. Por isso, não prometemos resultados específicos. Nosso trabalho é estruturar, acompanhar e otimizar a estratégia continuamente, buscando a melhor performance possível.",
  },
];

function scrollToContact() {
  document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
}

function SnowField() {
  const flakes = useMemo(
    () =>
      Array.from({ length: 54 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        delay: `${-((index * 1.27) % 19)}s`,
        duration: `${12 + ((index * 7) % 13)}s`,
        size: `${2 + (index % 4)}px`,
        opacity: 0.18 + (index % 4) * 0.1,
      })),
    [],
  );

  return (
    <div className="snow-field" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="snow-particle"
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
        />
      ))}
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <span />
      {children}
    </div>
  );
}

// +55 35 98403-7479 no formato exigido pelo wa.me: so digitos, com DDI
const LEAD_WHATSAPP = "5535984037479";
const WHATSAPP_URL = `https://wa.me/${LEAD_WHATSAPP}?text=${encodeURIComponent(
  "Olá! Vim pelo site da Koold e gostaria de saber mais sobre o trabalho de vocês.",
)}`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="koold-site">
      <SnowField />

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand-lockup" href="#inicio" aria-label="Koold Marketing — início" onClick={closeMenu}>
          <img className="brand-logo brand-logo--2026" src={assets.logo} alt="Koold Marketing" />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button className="header-cta" onClick={scrollToContact}>
          Falar com a Koold <ArrowUpRightIcon />
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <button onClick={() => { closeMenu(); scrollToContact(); }}>Falar com a Koold</button>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-image-wrap">
            <img src={assets.hero} alt="Montanha abstrata com linhas de tecnologia em azul ciano" className="hero-image" />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-content layout-shell">
            <SectionKicker>Marketing essencial para crescer</SectionKicker>
            <h1>
              Você não precisa de mais <em>barulho.</em>
              <br />
              Precisa da estrutura <strong>certa.</strong>
            </h1>
            <p className="hero-lead">
              Estratégia, mídia e presença digital para empresas que querem ser encontradas, gerar oportunidades e crescer com direção.
            </p>
            <div className="hero-actions">
              <button className="cta-primary" onClick={scrollToContact}>
                Quero colocar minha empresa em movimento <ArrowDownRight size={18} />
              </button>
              <a className="text-link" href="#metodo">
                Conhecer o método <ArrowRight size={16} />
              </a>
            </div>
          </div>
          <a className="hero-scroll" href="#metodo" aria-label="Rolar para conhecer o método">
            <span>desça para descobrir</span>
            <ChevronDown size={17} />
          </a>
        </section>

        <section className="experience-section" id="metodo">
          <div className="layout-shell">
            <div className="split-title">
              <SectionKicker>Experiência construída na prática</SectionKicker>
              <h2>
                Estratégias digitais para mais de <span>160 negócios.</span>
              </h2>
            </div>
            <div className="experience-content">
              <div className="experience-number">160<span>+</span></div>
              <div>
                <p className="body-large">
                  Nossa experiência vem da gestão de estratégias digitais em diferentes mercados, segmentos e estágios de negócio.
                </p>
                <div className="country-row" aria-label="Países atendidos">
                  {countries.map((country) => (
                    <span className="country-flag" key={country.label} title={country.label}>
                      <img src={country.src} alt={country.label} />
                    </span>
                  ))}
                </div>
                <blockquote>
                  “Uma empresa não precisa começar com uma estrutura de marketing enorme. Precisa começar com a estrutura certa.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="problem-section">
          <div className="layout-shell problem-grid">
            <div className="problem-statement">
              <SectionKicker>O problema</SectionKicker>
              <h2>Seu cliente já está procurando.</h2>
              <p>A questão é: ele está encontrando você ou seu concorrente?</p>
            </div>
            <div className="problem-list-wrap">
              <p className="body-small">Enquanto isso, muitas empresas ainda:</p>
              <ul className="thin-list">
                <li>Dependem quase exclusivamente de indicações.</li>
                <li>Possuem um perfil no Google pouco explorado.</li>
                <li>Investem em anúncios sem uma estratégia definida.</li>
                <li>Impulsionam publicações sem saber se isso gera oportunidades.</li>
                <li>Produzem conteúdo sem transformar atenção em clientes.</li>
              </ul>
              <div className="cold-line" />
              <p className="closing-note">Não basta estar na internet. Sua empresa precisa aparecer para as pessoas certas, nos lugares certos e no momento certo.</p>
            </div>
          </div>
        </section>

        <section className="manifesto-section">
          <div className="layout-shell manifesto-layout">
            <div className="manifesto-side">
              <SectionKicker>A Koold Marketing</SectionKicker>
              <p>Para pequenos e médios negócios que querem sair do improviso sem entrar em uma estrutura desnecessária.</p>
            </div>
            <div className="manifesto-main">
              <h2>Marketing profissional, sem estruturas desnecessárias.</h2>
              <p>A Koold nasceu para tornar estratégias profissionais de aquisição de clientes mais acessíveis.</p>
              <div className="manifesto-points">
                <span>Ser encontrada.</span>
                <span>Ser vista.</span>
                <span>Gerar oportunidades.</span>
              </div>
              <p className="manifesto-foot">Nós cuidamos da estratégia enquanto você continua cuidando do seu negócio.</p>
            </div>
          </div>
        </section>

        <section className="solutions-section" id="solucoes">
          <div className="layout-shell">
            <div className="section-heading-row">
              <div>
                <SectionKicker>O que fazemos</SectionKicker>
                <h2>Presença que gera <span>oportunidades.</span></h2>
              </div>
              <p>Estratégia integrada para sua empresa aparecer, comunicar e converter com clareza.</p>
            </div>
            <div className="solutions-rail">
              <article className="solution-item solution-item--image">
                <img src={assets.googleBusiness} alt="Celular e laptop exibindo uma presença empresarial digital" />
                <div className="image-solution-copy">
                  <span className="solution-index">01</span>
                  <h3>Google<br />Meu Negócio</h3>
                  <p>Fortalecemos sua relevância nas pesquisas locais e apresentamos melhor o seu negócio a potenciais clientes.</p>
                </div>
              </article>
              <article className="solution-item solution-item--image">
                <img src={assets.performance} alt="Trajetória luminosa em vidro escuro representando performance" />
                <div className="image-solution-copy">
                  <span className="solution-index">02</span>
                  <h3>Tráfego<br />Pago</h3>
                </div>
              </article>
              <article className="solution-item solution-item--image">
                <img src={assets.strategy} alt="Planejamento de estratégia com indicadores em azul ciano" />
                <div className="image-solution-copy">
                  <span className="solution-index">03</span>
                  <h3>Estratégia</h3>
                  <p>Orientamos ofertas, comunicação e materiais para desenvolver campanhas mais coerentes com o seu momento.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="service-showcase service-showcase--content">
          <div className="showcase-image"><img src={assets.content} alt="Estúdio criativo em atmosfera fria e cinematográfica" /></div>
          <div className="showcase-copy">
            <SectionKicker>Presença + Performance</SectionKicker>
            <h2>Conteúdo constrói <span>presença.</span> Anúncios criam movimento.</h2>
            <p>Para marcas que precisam manter uma comunicação profissional e constante nas redes sociais, conectamos conteúdo, direção e campanhas em uma única estratégia.</p>
            <a href="#planos" className="text-link">Ver estrutura completa <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="process-section">
          <div className="layout-shell">
            <div className="process-header">
              <SectionKicker>Como funciona</SectionKicker>
              <h2>Você cuida do negócio. A Koold cuida da <span>estratégia.</span></h2>
            </div>
            <div className="process-grid">
              {[
                ["01", "Diagnóstico", "Entendemos seu negócio, público, região, serviços e principais objetivos."],
                ["02", "Estruturação", "Organizamos sua presença digital e as campanhas necessárias para começar."],
                ["03", "Ativação", "Colocamos sua empresa diante de potenciais clientes pelos canais definidos na estratégia."],
                ["04", "Otimização", "Acompanhamos as campanhas e realizamos ajustes constantes para melhorar a performance."],
              ].map(([number, title, text]) => (
                <article className="process-item" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="plans-section" id="planos">
          <div className="layout-shell">
            <div className="plans-intro">
              <SectionKicker>Planos</SectionKicker>
              <h2>Comece pelo essencial. <span>Escale com direção.</span></h2>
              <p>Escolha uma estrutura que faça sentido para o momento da sua empresa.</p>
            </div>
            <div className="plans-grid">
              <article className="plan-card">
                <div className="plan-topline"><span>Koold Performance</span><Snowflake size={18} /></div>
                <p className="plan-price">A partir de <strong>R$ 297</strong><small>/mês</small></p>
                <p className="plan-description">Para colocar sua empresa diante de potenciais clientes com estratégia e consistência.</p>
                <ul>
                  {[
                    "Gestão de tráfego pago",
                    "Gestão do Google Meu Negócio",
                    "Planejamento das campanhas",
                    "Estratégia de comunicação",
                    "Direcionamento dos materiais necessários",
                    "Gestão e otimização das campanhas",
                    "Acompanhamento da operação",
                  ].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
                <p className="plan-note">O investimento destinado às plataformas de anúncios não está incluído.</p>
                <button className="cta-outline plan-button" onClick={scrollToContact}>Conhecer este plano <ArrowRight size={16} /></button>
              </article>
              <article className="plan-card plan-card--featured">
                <div className="plan-topline"><span>Presença + Performance</span><Snowflake size={18} /></div>
                <p className="plan-price">A partir de <strong>R$ 597</strong><small>/mês</small></p>
                <p className="plan-description">Para empresas que precisam de anúncios e de uma presença profissional constante nas redes sociais.</p>
                <div className="plan-include">Tudo o que está incluso no Koold Performance, mais:</div>
                <ul>
                  {[
                    "Gestão das redes sociais",
                    "Dois conteúdos semanais",
                    "Planejamento de conteúdo",
                    "Criação das peças planejadas",
                    "Estratégia integrada entre conteúdo e anúncios",
                  ].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                </ul>
                <p className="plan-note">Consulte condições dos planos e serviços disponíveis.</p>
                <button className="cta-primary plan-button" onClick={scrollToContact}>Conhecer o plano completo <ArrowDownRight size={16} /></button>
              </article>
            </div>
          </div>
        </section>

        <section className="ideal-section">
          <div className="layout-shell ideal-layout">
            <div>
              <SectionKicker>Para quem é</SectionKicker>
              <h2>A Koold pode ser para a sua empresa se você:</h2>
            </div>
            <ul className="ideal-list">
              {[
                "Tem um negócio local e quer aumentar sua presença digital.",
                "Quer começar a anunciar profissionalmente.",
                "Quer melhorar a presença da empresa no Google.",
                "Está cansado de depender somente de indicação.",
                "Já tentou impulsionar publicações e não conseguiu entender os resultados.",
                "Quer uma equipe especializada, sem precisar investir milhares de reais por mês logo no início.",
              ].map((item) => <li key={item}><span>+</span>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="layout-shell faq-layout">
            <div className="faq-intro">
              <SectionKicker>FAQ</SectionKicker>
              <h2>Perguntas frequentes, respostas diretas.</h2>
              <p>Se a sua dúvida não estiver aqui, nossa equipe pode explicar o caminho mais adequado para o seu negócio.</p>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = index === openFaq;
                return (
                  <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.question}>
                    <button onClick={() => setOpenFaq(isOpen ? null : index)} aria-expanded={isOpen}>
                      <span>{item.question}</span>
                      <ChevronDown size={19} />
                    </button>
                    <div className="faq-answer"><p>{item.answer}</p></div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-radial" />
          <div className="layout-shell contact-layout">
            <div className="contact-copy">
              <SectionKicker>Próximo passo</SectionKicker>
              <h2>Tem alguém procurando o que você vende <span>agora.</span></h2>
              <p className="contact-question">Essa pessoa vai encontrar você ou seu concorrente?</p>
              <p>Comece a construir uma presença digital estratégica com quem carrega a experiência de mais de 160 negócios gerenciados em cinco países.</p>
            </div>
            <div className="contact-form">
              <a className="cta-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp <ArrowDownRight size={17} />
              </a>
              <p className="form-caption">Conversa direta com a equipe da Koold, sem formulário.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="layout-shell footer-inner">
          <a className="brand-lockup brand-lockup--footer" href="#inicio" aria-label="Koold Marketing — início">
            <img className="brand-logo brand-logo--2026" src={assets.logo} alt="Koold Marketing" />
          </a>
          <p>Marketing essencial para empresas que querem crescer.</p>
          <a href="#inicio" className="back-top">Voltar ao início <MoveUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <MoveUpRight size={15} strokeWidth={2.2} />;
}
