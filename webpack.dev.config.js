const path = require("path");

module.exports = {
  entry: {
    "odontosoftreact": path.resolve(__dirname, "src/entries/home.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // path: path.resolve('D:/Docs/WS_Go/src/github.com/TheoRev/OdontoSoftGo/public', "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    port: 9000
  },
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["es2015", "react", "stage-2"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|png|gif|svg|eot|svg|woff|woff2|ttf)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 1000000,
            fallback: "file-loader",
            name: "images/[name].[hash].[ext]"
          }
        }
      }
    ]
  }
};
