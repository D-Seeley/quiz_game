module.exports = {
    entry: ['babel-polyfill', './lib/client/index.js'],
    output: {
      filename: 'main.js',
      path: __dirname + '/public'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2'],
            plugins: ['transform-object-rest-spread']
          }
        }
      ]
    }
  };