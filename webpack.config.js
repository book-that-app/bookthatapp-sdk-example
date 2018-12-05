const path = require('path');

const config = {
  // TODO: Add common Configuration
  devtool: 'source-map',
  optimization: {
    minimize: true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9001
  }
};

const btaSdk = Object.assign({}, config, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bookthatapp-sdk.min.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'BookThatApp',
  },
});

module.exports = [btaSdk];
