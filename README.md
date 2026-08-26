# Diego Cardoso — Portfolio

Site pessoal de [Diego Cardoso](https://portfolio-js-psi.vercel.app), desenvolvedor Full Stack com atuação em DevOps. Apresenta o [Balance](https://balanceinvest.app), um SaaS de rebalanceamento de investimentos, além de posts técnicos publicados no [dev.to](https://dev.to/diegocard117).

## Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build/dev server, plugin `@vitejs/plugin-react-swc`)
- [Sass](https://sass-lang.com/) para estilos, com um sistema de tokens (cor, tipografia, espaçamento) em `src/assets/css/style.scss`
- [Framer Motion](https://www.framer.com/motion/) para animações
- [react-tsparticles](https://particles.js.org/) para o fundo animado do hero
- [EmailJS](https://www.emailjs.com/) para o formulário de contato
- i18n PT-BR/EN próprio (`src/i18n`), sem dependências externas

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (ou a próxima porta livre).

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento (Vite + HMR) |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Roda o ESLint |
| `npm run test` | Roda a suíte de testes (Vitest + Testing Library) |
| `npm run test:watch` | Roda os testes em modo watch |

## Estrutura

```
src/
  assets/css/    estilos Sass (um arquivo por seção/página)
  assets/img/    ícones e imagens
  components/    componentes reutilizáveis (Menu, SkillGrid, LanguageToggle, Design...)
  i18n/          contexto de idioma e dicionário de traduções PT/EN
  pages/         seções da página (Home, Portfolio, Blog, AboutMe, Footer)
```

## Deploy

Hospedado na [Vercel](https://vercel.com/), com deploy automático a partir da branch `main`.
