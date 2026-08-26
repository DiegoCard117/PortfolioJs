export type Language = 'pt' | 'en';

export interface Translations {
  skipLink: string;
  nav: {
    home: string;
    works: string;
    blog: string;
    about: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    taglineSep: string;
    cta: string;
    resumeCta: string;
    resumeFile: string;
    scroll: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    intro: string;
    balance: {
      eyebrowLabel: string;
      tagline: string;
      paragraph1: string;
      paragraph2: string;
      features: string[];
      visit: string;
      cta: string;
      alt: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    skillsLabel: string;
  };
  github: {
    label: string;
    repos: string;
    followers: string;
    since: string;
    viewProfile: string;
    loading: string;
    error: string;
  };
  nowPlaying: {
    loading: string;
    playingNow: string;
    lastPlayed: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    intro: string;
    loading: string;
    error: string;
    empty: string;
    viewAll: string;
  };
  footer: {
    eyebrow: string;
    title: string;
    intro: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    sentMessage: string;
    errorMessage: string;
    fillFieldsAlert: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    skipLink: 'Pular para o conteúdo',
    nav: {
      home: 'Início',
      works: 'Projetos',
      blog: 'Blog',
      about: 'Sobre mim',
      contact: 'Contato',
    },
    hero: {
      eyebrow: 'Olá',
      tagline: 'Desenvolvedor Full Stack',
      taglineSep: 'DevOps',
      cta: 'Fale comigo',
      resumeCta: 'Baixar currículo',
      resumeFile: '/resume/diego-cardoso-resume-pt.pdf',
      scroll: 'Role',
    },
    portfolio: {
      eyebrow: 'Portfólio',
      title: 'Meu portfólio',
      intro: 'Hoje meu portfólio tem um projeto central: o Balance, um SaaS de rebalanceamento de investimentos que construí sozinho, do backend ao deploy em produção.',
      balance: {
        eyebrowLabel: 'Projeto em destaque',
        tagline: 'Rebalanceamento de investimentos multi-mercado — Brasil, EUA e Cripto',
        paragraph1: 'O Balance organiza carteiras de ações brasileiras, ações americanas, renda fixa e criptomoedas em um só lugar, e calcula automaticamente quanto comprar de cada ativo a cada novo aporte para manter a alocação dentro da meta.',
        paragraph2: 'Busca cotações em tempo real (BRAPI, Yahoo Finance e Binance), acompanha CDI, Selic e IPCA via Banco Central, e gera relatórios de Imposto de Renda para o Brasil e de Capital Gains (Schedule D) para carteiras americanas.',
        features: [
          'Rebalanceamento automático de aportes (BR, US e Cripto)',
          'Relatórios de IR (Brasil) e Capital Gains (EUA)',
          'Assinaturas via Mercado Pago — PIX e cartão recorrente',
          'Autenticação com 2FA, i18n PT-BR/EN e tema claro/escuro',
          '+300 testes automatizados, CI/CD e monitoramento com Sentry',
        ],
        visit: 'balanceinvest.app ↗',
        cta: 'Acessar o Balance',
        alt: 'Painel do Balance mostrando carteiras, alocação consolidada e saúde das metas por categoria',
      },
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Quem sou eu',
      paragraphs: [
        'Olá, sou o Diego, tenho 24 anos e sou desenvolvedor Full Stack com um pé no DevOps — hoje sou responsável pelos deploys e ambientes da minha equipe no trabalho.',
        'Minha carreira começou no suporte de TI, primeiro na Santa Casa e depois no Sicoob Coopacredi, até migrar para Desenvolvedor (cargo formal: Analista de Performance Corporativa), função que ocupo até hoje trabalhando com Django, automação e infraestrutura.',
        'No meio desse caminho, passei 8 meses como Desenvolvedor Frontend Pleno em uma startup, construindo um produto para uma equipe italiana — foi ali que me apaixonei de vez por criar interfaces.',
        'Hoje, além do trabalho, também construo meus próprios produtos: o Balance é um SaaS de investimentos que fiz sozinho, do banco de dados ao deploy em produção (dá pra conferir na seção de portfólio).',
        'Gosto de estar em todas as camadas de um projeto — da interface ao servidor que a hospeda — e sigo sempre buscando entender melhor cada parte da stack.',
      ],
      skillsLabel: 'Stack & ferramentas',
    },
    github: {
      label: 'GitHub',
      repos: 'repositórios públicos',
      followers: 'seguidores',
      since: 'desde',
      viewProfile: 'Ver perfil completo ↗',
      loading: 'Carregando…',
      error: 'Não consegui carregar agora.',
    },
    nowPlaying: {
      loading: 'Carregando…',
      playingNow: 'Ouvindo agora',
      lastPlayed: 'Ouvi por último',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'O que eu escrevo',
      intro: 'De vez em quando escrevo sobre o que aprendo construindo o Balance e no dia a dia como Analista de Performance Corporativa. Os posts completos ficam no dev.to.',
      loading: 'Carregando posts…',
      error: 'Não consegui carregar os posts agora. Veja direto no',
      empty: 'Ainda sem posts publicados — em breve tem novidade por aqui.',
      viewAll: 'Ver todos os posts no dev.to ↗',
    },
    footer: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      intro: 'Tem um projeto em mente ou só quer trocar uma ideia? Me manda uma mensagem.',
      emailPlaceholder: 'Seu email',
      messagePlaceholder: 'Sua mensagem',
      sending: 'Enviando…',
      send: 'Enviar mensagem',
      sentMessage: 'Mensagem enviada — te respondo em breve!',
      errorMessage: 'Algo deu errado. Tenta de novo ou me chama pelo LinkedIn.',
      fillFieldsAlert: 'Preencha todos os campos',
    },
  },
  en: {
    skipLink: 'Skip to content',
    nav: {
      home: 'Home',
      works: 'Works',
      blog: 'Blog',
      about: 'About Me',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Hello',
      tagline: 'Full Stack Developer',
      taglineSep: 'DevOps',
      cta: 'Get in touch',
      resumeCta: 'Download resume',
      resumeFile: '/resume/diego-cardoso-resume-en.pdf',
      scroll: 'Scroll',
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'My portfolio',
      intro: "Right now my portfolio has one central project: Balance, an investment-rebalancing SaaS I built solo, from the backend to the production deploy.",
      balance: {
        eyebrowLabel: 'Featured project',
        tagline: 'Multi-market investment rebalancing — Brazil, US and Crypto',
        paragraph1: "Balance brings together Brazilian stocks, US stocks, fixed income and crypto in one place, and automatically calculates how much of each asset to buy on every new contribution to keep the allocation on target.",
        paragraph2: "It fetches real-time quotes (BRAPI, Yahoo Finance and Binance), tracks CDI, Selic and IPCA via Brazil's Central Bank, and generates income tax reports for Brazil and Capital Gains (Schedule D) reports for US portfolios.",
        features: [
          'Automatic contribution rebalancing (BR, US and Crypto)',
          'Tax reports for Brazil and US Capital Gains',
          'Subscriptions via Mercado Pago — PIX and recurring card',
          '2FA authentication, PT-BR/EN i18n and light/dark theme',
          '+300 automated tests, CI/CD and monitoring with Sentry',
        ],
        visit: 'balanceinvest.app ↗',
        cta: 'Open Balance',
        alt: "Balance dashboard showing portfolios, consolidated allocation and goal health by category",
      },
    },
    about: {
      eyebrow: 'About me',
      title: 'Who I am',
      paragraphs: [
        "Hi, I'm Diego, I'm 24 and I'm a Full Stack developer with one foot in DevOps — I currently own deploys and environments for my team at work.",
        "My career started in IT support, first at Santa Casa and then at Sicoob Coopacredi, before moving into a Developer role (formal title: Corporate Performance Analyst), which I hold today working with Django, automation and infrastructure.",
        "Somewhere along the way I spent 8 months as a Mid-level Frontend Developer at a startup, building a product for an Italian team — that's where I fell in love with building interfaces.",
        "Today, besides my day job, I also build my own products: Balance is an investment SaaS I built solo, from the database to the production deploy (check it out in the portfolio section).",
        "I like being involved in every layer of a project — from the interface to the server hosting it — and I keep looking to understand each part of the stack more deeply.",
      ],
      skillsLabel: 'Stack & tools',
    },
    github: {
      label: 'GitHub',
      repos: 'public repos',
      followers: 'followers',
      since: 'since',
      viewProfile: 'View full profile ↗',
      loading: 'Loading…',
      error: "Couldn't load this right now.",
    },
    nowPlaying: {
      loading: 'Loading…',
      playingNow: 'Now playing',
      lastPlayed: 'Last played',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'What I write about',
      intro: "Every now and then I write about what I learn building Balance and from my day-to-day as a Corporate Performance Analyst. Full posts live on dev.to.",
      loading: 'Loading posts…',
      error: "Couldn't load posts right now. Check them out directly on",
      empty: 'No posts published yet — more coming soon.',
      viewAll: 'See all posts on dev.to ↗',
    },
    footer: {
      eyebrow: 'Contact',
      title: "Let's talk",
      intro: "Have a project in mind or just want to chat? Send me a message.",
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      sending: 'Sending…',
      send: 'Send message',
      sentMessage: "Message sent — I'll get back to you soon!",
      errorMessage: "Something went wrong. Try again or reach me on LinkedIn.",
      fillFieldsAlert: 'Please fill in all fields',
    },
  },
};
