module.exports = {

  mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: './src/js/app.js',
  output: {
 path: __dirname + '/dist',
  filename: 'bundle.js'
},
module : {
  rules: [
    {test: /\.css$/,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]

    }
    ]
  }
}
