const HtmlWebpackPlugin = require('html-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container', // name is not necessary for the host
      // it is only used by the host to connect to the remotes
      remotes: {
        // connecting to the file (consuming the file)
        products: 'products@http://localhost:8081/remoteEntry.js',
      },
    }),
  ],
};
