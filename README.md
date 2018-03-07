# React - Router - Redux Starter
Starter App for React projects with routing options, data store using Redux, managed by Webpack and transpiled by Babel

## Getting Started

### Features

- React for the view
- React Router for URL routing
    - With support for route-based code splitting
    - `react-loadable` for loading placeholders
- Redux for data store
- Webpack 3 for bundling
- Babel for ES6 and ES7 transpiling
- Webpack dev server for hot-reloading

### Prerequisites

- Node
- NPM or Yarn

### Installing

```
git clone https://github.com/apvarun/ReactRouterReduxStarter.git
cd ReactRouterReduxStarter
yarn
```

## Deployment

```
yarn run build
```

## Supported Commands

| `yarn run <script>`    | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `build`            | Build the project and output the files to the *dist* folder.           |
| `dev` | Spins up a hot-reloading live server at `localhost:8080` for development. |
| `analyse` | Generates the Stats.json file that talks about what teh bundle consists of. Use the [Visualizer](https://chrisbateman.github.io/webpack-visualizer/) by Chris to analyse the output file. |

## Built With

* [React](https://reactjs.org/) - The web framework
* [React Router](https://github.com/ReactTraining/react-router) - The URL handler
* [Redux](http://redux.js.org) - Predictable state container
* [Webpack](https://webpack.js.org/) - Module bundler
* [Babel](https://babeljs.io/) - JavaScript transpiler

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

