### SvelteKit TypeScript Cloudflare Boilerplate

Boilerplate for SvelteKit projects in TypeScript, optimized for Cloudflare Pages

> ⚠️ When deploying, use SvelteKit preset and set `NODE_VERSION` env to `18.18` for compatibility

#### Prerequisites

- [Node.js](https://nodejs.org/) (^18.18)
- [pnpm](https://pnpm.io/) (^8.15)

#### Getting Started

1. Clone repo:

      ```bash
      git clone https://github.com/equilpres/sveltekit-cloudflare-typescript-boilerplate.git
      ```

2. Go to project dir:

      ```bash
      cd sveltekit-cloudflare-typescript-boilerplate
      ```

3. Install deps:

      ```bash
      pnpm install
      ```

#### Scripts

- `dev`: Start dev server.

     ```bash
     pnpm dev
     ```

- `build`: Build project.

     ```bash
     pnpm build
     ```

- `preview`: Preview prod build.

     ```bash
     pnpm preview
     ```

- `sync`: Sync files with SvelteKit.

     ```bash
     pnpm sync
     ```

- `svelte-check`: Check Svelte files.

     ```bash
     pnpm svelte-check
     ```

- `lint`: Lint code.

     ```bash
     pnpm lint
     ```

- `fmt`: Format code.

     ```bash
     pnpm fmt
     ```

- `bump`: Update deps.

     ```bash
     pnpm bump
     ```

#### License

[MIT](LICENSE)
