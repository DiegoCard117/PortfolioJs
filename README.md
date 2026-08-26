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
api/             funções serverless da Vercel (ex: now-playing.js)
src/
  assets/css/    estilos Sass (um arquivo por seção/página)
  assets/img/    ícones e imagens
  components/    componentes reutilizáveis (Menu, SkillGrid, LanguageToggle, Design...)
  i18n/          contexto de idioma e dicionário de traduções PT/EN
  pages/         seções da página (Home, Portfolio, Blog, AboutMe, Footer)
```

## Widget "ouvindo agora" (Spotify)

O card na seção Sobre Mim mostra a música atual (ou a última tocada) via uma função
serverless (`api/now-playing.js`) que guarda as credenciais no servidor — nunca no
navegador. Pra configurar:

1. Crie um app em [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
   e anote o **Client ID** e o **Client Secret**.
2. Adicione uma Redirect URI no app (pode ser `https://portfolio-js-psi.vercel.app`, só
   precisa existir pra completar o passo 3).
3. Gere um **refresh token** uma única vez, autorizando o app com os escopos
   `user-read-currently-playing user-read-recently-played`, e trocando o `code` retornado
   por um token via `POST https://accounts.spotify.com/api/token` (grant_type
   `authorization_code`).
4. No projeto da Vercel, em Settings → Environment Variables, adicione:
   `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN` (veja `.env.example`).
5. Redeploy. Sem essas variáveis configuradas, o card simplesmente não aparece — não
   quebra o resto do site.

## Deploy

Hospedado na [Vercel](https://vercel.com/), com deploy automático a partir da branch `main`.
