# webpack

Let us assume you have an `index.js` file:

```js
import faker from 'faker';
/* some code using this module */
```

When you usually load this file (`index.js`) inside the web browser, it loads all the other JS files related to faker to make use of the library based on the code that you wrote after importing it.

This is not an ideal thing to do as it would make the user experience bad. We should load as few javascript files on the browser as possible.

This is where `webpack` comes into picture.

_Webpack combines many javascript files into a single file which is usually called as 'bundle.js' or 'main.js'._

<p align="center" width="500"><img src="https://webpack.github.io/assets/what-is-webpack.png"/></p>

Webpack config for development (needs to be there in the project folder):

```js
module.exports = {
  mode: 'development',
  // adding below line to take the built main.js/bundle.js
  // file and make it available for the web browser
  devServer: {
    port: 8081,
  },
};

/**
 * if you use localhost:8081 on your browser
 * you will see all the files on your root filesystem
 * as if you were looking at an FTP server
 * AND if you go to http://localhost:8081/main.js
 * you will see the contents of the main.js file
 */
```
