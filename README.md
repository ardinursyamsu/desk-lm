# desk-lm

An Electron application with React

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Enable cuda support (llama.cpp)
```
$ npx --no node-llama-cpp download --cuda
```

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

### Enabling ESM for llama.cpp
1. Add `"type": "module"` in `package.json`
2. Change `preload: join(__dirname, '../preload/index.js')` to `preload: join(__dirname, '../preload/index.mjs'),` in main.js