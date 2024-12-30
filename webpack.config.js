const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
     entry: {
       main: [path.join(__dirname, './src/index.js'), path.join(__dirname, './src/scss/main.scss')]
     }, // Главный файл приложения
    watch: true,
    output: {
          filename: "bundle.js", // Результирующий файл
          path: path.resolve(__dirname, "dist"), // Папка для сборки
     },
     module: {
          rules: [
               {
                   test: /\.scss$/,
                   use: [
                        MiniCssExtractPlugin.loader,
                       "css-loader",
                       "sass-loader",
                   ]
               },
               {
                    test: /\.js$/, // Применение для всех .js файлов
                    exclude: /node_modules/, // Исключение папки node_modules
                    use: {
                         loader: "babel-loader", // Использование babel-loader
                         options: {
                              presets: [
                                  [
                                      "@babel/preset-env",
                                       {
                                            targets: "> 0.25%"
                                       }
                                       ]
                              ]
                         }
                    }
               },
          ],
     },
     plugins: [
         new MiniCssExtractPlugin({
              filename: "style.css"
         })
     ]
};
