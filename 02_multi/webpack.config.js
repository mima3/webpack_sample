const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    page1: path.join(__dirname, "src", "page1_src.js"),
    page2: path.join(__dirname, "src", "page2_src.js"),
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js"
  }
}
