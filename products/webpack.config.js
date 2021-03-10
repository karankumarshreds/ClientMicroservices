// this will take all the webpack rendered/bundled
// javascript files and import it in the public
// index.html file in the script tags
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module federation plugin here spits out a set of files
// that includes the set of direction and src files
// that can be consumed by the other projects
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
      // contains the list of files that are available
      // from the project + directions on how to load
      // them
      // consumed by the other projects
      // other projects will use this file to load the
      // index.js/other files generated for the extra
      // imports that are being used in the products/src
      // folder
      filename: 'remoteEntry.js',
      exposes: {
        // version of src/index.js file that can be loaded
        // into the browser
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
