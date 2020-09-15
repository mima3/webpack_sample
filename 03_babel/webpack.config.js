const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", "page1_src.js"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "page1.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
