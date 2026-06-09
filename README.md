This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Basic files in a Next.js project

### `tsconfig.json`

It defines the basic typescript configuration, typecheck, which ignores and the rules

### `postcss.config.mjs`

Configuration file for post css, tool to process css to different plugings, in this case Tailwind

### `package.lock`

File that contains a frozen history of the dependencies installed and used within this project, with the exact subdependencies in order to
replicate exactly this project through any other dev environment with the exact same versions. This file does the same as `uv.lock`

### `package.json`

Contains all the project dependencies and scripts. It contaisn the name of the project, some commands, the version of the project, etc.
It keeps track the dev dependencies

### `next-env.d.ts`

File that should not be edited, it is used as a next-js typescrípt configuration file

### `next.config.ts`

Allows us to configure the nextjs configures within this project

### `eslint.config.mjs`

Configure linting

### `app`

It contains all the Pages rendered within the webapp, using a file-based routing system.

### `public`

Place for static assets to be used within ths project


### `node_modules`

Here the actual dependencies installed are placed and saved, its like the `.venv` directory in a python project


## Steps for the creation of this project

1. Install pnpm in Ubuntu 24.04:
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc
```

2. Create a new Next.js project using pnpm
```bash
pnpx create-next-app@latest 
# Here you need to select a project name
# Select to use default config or custom
pnpm approve-builds # In case it needs it
```

3. Run the app in dev mode
```bash
pnpm run dev
```

4. Install plugin to analyze de code at build time automatically
```bash
pnpm install babel-plugin-react-compiler@latest
```
