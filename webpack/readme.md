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

Webpack config for development (needs to be there in the project folder):

```js
module.exports = {
  mode: 'development',
};
```
