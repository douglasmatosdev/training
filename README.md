
# Tranning ReactJS, Webpack, Babel, Jest, Typescript
## Setup Application React with `webpack` and `babel` without `create-react-app` from scratch with minimal setttings

I'm using package manage `yarn`

Initializing project

`yarn init -y`

Install dependencies of production

`yarn add react react-dom`

Install dependencies of development with flag `-D`

`yarn add -D  webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader css-loader html-webpack-plugin style-loader webpack-dev-server`

Add in your `package.json` the next field below

```json
 "scripts": {
    "start": "webpack-dev-server --mode development --open --hot --port 3000",
    "build": "webpack --mode production"
  },
```

Create a new file with name `.babelrc` and with content

```json
{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "node": "current"
          }
        }
      ],
      "@babel/react"
    ]
  }
```

Create a new file with name `webpack.config.js` and with content

```javascript
const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
})

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [htmlPlugin]
}
```

Create a new file with name `.gitignore` and with content

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build
/dist

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

Now, create two folder `public` and `src`, you see a next tree of files

```
> node_modules
> public
> src
.babelrc
.gitignore
package.json
webpack.config.js
yarn.lock
```


In folder `public`, create a new file `ìndex.html` width content

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width" initial-scale="1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tranning</title>
    </head>
    <body>
        <noscript>Enable javascript to work</noscript>
        <div id="root"></div>
    </body>
</html>
```

And in folder `src` create three files `App.js`, `index.js`, `index.css`, each files with contents:

> `App.js`
```jsx
import React from 'react'

const App = () => {
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

export default App
```

>`index.js`
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

>`index.css`
```css
body {
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  box-sizing: border-box;
}

h1 {
  font-size: 200px;
}
```

Now, run in terminal this comand `yarn start` and open your browser and typing in search bar this url `http://localhost:3000`