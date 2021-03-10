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
