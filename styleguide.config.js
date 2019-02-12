'use strict';

module.exports = {
  components: 'src/components/**/*.js',
  ignore: ['src/components/**/test-*.js'],
  webpackConfig: {
    devServer: {
      disableHostCheck: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  }
};
