# PrimeData Docs

This document is live at https://developer.primedata.ai

It is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Contribute

Documents' sources are located at [./docs](./docs). Check the below to see how to publish your changes.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Publish

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```
