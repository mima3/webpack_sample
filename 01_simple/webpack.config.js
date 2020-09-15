const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "src", "page1_src.js"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "page1.js"
  }
}
