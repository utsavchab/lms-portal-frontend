// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   output: {
//     path: path.join(__dirname, "/build"), // the bundle output path
//     filename: "index.js", // the name of the bundle
//     publicPath : "/"
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname , "public/index.html"), // to import index.html file inside index.js
//       filename: "index.html"
//     }),
//   ],
//   devServer: {
//     // port: 3030, // you can change the port
//     historyApiFallback: true
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/, // .js and .jsx files
//         exclude: /node_modules/, // excluding the node_modules folder
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.(sa|sc|c)ss$/, // styles files
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
//         loader: "url-loader",
//         options: { limit: false },
//       },
//     ],
//   },
// };