// this will take all the webpack rendered/bundled
// javascript files and import it in the public
// index.html file in the script tags
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  // adding below line to take the built main.js/bundle.js
  // file and make it available for the web browser
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js', // name by which the build will be consumed
      exposes: {
        // name of the module (=== products/ProductsIndex)
        // how it will be imported in the host (container)
        './ProductsIndex': './src/index',
      },
    }),
  ],
};

/**
 * if you use localhost:8081 on your browser
 * you will see all the files on your root filesystem
 * as if you were looking at an FTP server
 * AND if you go to http://localhost:8081/main.js
 * you will see the contents of the main.js file
 */
