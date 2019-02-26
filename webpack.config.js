module.exports = {
    entry: ['babel-polyfill', './/index.js'],
    output: {
      filename: 'main.js',
      path: __dirname + '/public'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  };