
# Halv00rsen Core

![main/core](https://github.com/halv00rsen/core/actions/workflows/main.yml/badge.svg)

Core React component library used for private projects.

### Install package in local npm project

```bash
npm i @halv00rsen/core
```

NB! Be sure to have set `repository=https://npm.pkg.github.com/` in the project's `.npmrc`. See [Github docs](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package).

### Import the components wanted

```ts
import { Button } from '@halv00rsen/core';
```

### Development of package

```bash
npm i
```

Start storybook for local development.

```bash
npm start
```

Test the package.

```bash
npm run test
```

Uses semantic release. Prefix the commit messages with `fix` for minor changes, `feat` for major, or add `BREAKING CHANGES` to the commit header for breaking changes.
