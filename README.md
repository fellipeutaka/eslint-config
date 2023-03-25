# Fellipe Utaka ESLint config

## Whats included?

- Standard config base;
- React config base;
- Expo config base;
- Next.js config base;
- Node config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```bash
# If you are using NPM
$ npm i eslint @fellipeutaka/eslint-config -D

# If you are using Yarn
$ yarn add eslint @fellipeutaka/eslint-config -D

# If you are using PNPM
$ pnpm i eslint @fellipeutaka/eslint-config -D
```

2. Create a `.eslintrc.json` file extending the configuration you want to use:

```json
{
  "extends": "@fellipeutaka/eslint-config/next"
  // "extends": "@fellipeutaka/eslint-config/react"
  // "extends": "@fellipeutaka/eslint-config/expo"
  // "extends": "@fellipeutaka/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
