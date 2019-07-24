module.exports = {
  components: 'src/components/**/*.js',
  ignore: ['src/components/**/test-*.js'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://assets.ubuntu.com/v1/vanilla-framework-version-1.8.1.min.css'
        }
      ]
    }
  },
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
