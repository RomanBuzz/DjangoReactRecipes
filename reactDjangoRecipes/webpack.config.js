const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin
      (
        {
          template: "./src/index.html"
        }
      ),
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx",]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.devServer = {
      static: './dist',
      hot: false,
      historyApiFallback: true,
    };
  } else {
    config.mode = "development";
    config.devServer = {
      static: './dist',
      hot: true,
      historyApiFallback: true,
    };
    config.devtool = 'inline-source-map';
  }
  return config;
};
