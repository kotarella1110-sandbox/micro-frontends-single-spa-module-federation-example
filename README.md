# micro-frontends-single-spa-module-federation-example

This repository is an example of Micro Frontends built with single-spa.
The single-spa team recommends using SystemJS + import maps as a way to load Micro Frontends themselves, but this example uses Module Federation instead.

## Quick start

1. Installation

```sh
npm install --prefix shell
npm install --prefix react-app
```

2. Run locally

```sh
npm run dev --prefix shell
npm run dev --prefix react-app
```

3. Access http://localhost:9000
