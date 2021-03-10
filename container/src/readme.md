# bootstrap.js

Existence of bootstrap.js file tells webpack that it needs to fetch some files from some other projects
who's details mentioned in the import statement of the bootstrap.js file.

_In short it hijacks the code sequence and runs + imports third party code mentioned in the bootstrap before actually running index.js_

```js
// loads this from the products sender
import 'products/ProductsIndex';
console.log('container');
```

**IMPORTANT**:

Webpack sees the import for the module called `products` which it first looks up for in the node\*modules.
If it doesn't find it, it checks the **webpack.config.js**

```js
.
.
.
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // checks for the producs key
        // finds it then loads the files from the mentioned project
        products: 'products@http://localhost:8081/remoteEntry.js',
      },
    }),
```

# index.js

```js
import('./bootstrap');
```
