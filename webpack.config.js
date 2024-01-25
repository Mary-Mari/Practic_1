const path = require('path');

module.exports = {
  mode: 'development', // или 'production' в зависимости от режима
  entry: './src/index.ts', // Путь к TypeScript файлу
  output: { // вывод
    filename: 'bundle.js', //имя сгенерированого файла 
    path: path.resolve(__dirname, 'dist'), // Путь к каталогу вывода
  },
  resolve: {  //Этот параметр указывает Webpack, какие расширения файлов автоматически разрешать при импортах
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,   // Регулярное выражение для файлов, которые должны быть обработаны загрузчиком
        use: 'ts-loader',  // Используемый загрузчик для TypeScript файлов
        exclude: /node_modules/,  
      },
    ],
  },
};


