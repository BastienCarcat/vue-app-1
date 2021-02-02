module.exports = {
  transpileDependencies: ["vuetify"],
  outputDir: "docs",
  publicPath: process.env.NODE_ENV === "production" ? "/vue-app-1" : "/",
  // module: {
  //   rules: [
  //     {
  //       test: /\.s(c|a)ss$/,
  //       use: [
  //         "vue-style-loader",
  //         "css-loader",
  //         {
  //           loader: "sass-loader",
  //           // Requires sass-loader@^7.0.0
  //           options: {
  //             implementation: require("sass"),
  //             indentedSyntax: true, // optional
  //           },
  //           // Requires sass-loader@^8.0.0
  //           options: {
  //             implementation: require("sass"),
  //             sassOptions: {
  //               indentedSyntax: true, // optional
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
};
