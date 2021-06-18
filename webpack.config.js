const path = require('path')

var glob = require('glob');
const ImageminPlugin = require('imagemin-webpack-plugin').default

var debug = true;

function getEntry() {
  var entry = {};
  glob.sync(__dirname + "/src/*.js").forEach(function (file) {
    var name = file.match(/([^/]+?)\.js/)[1];
    entry[name] = __dirname + "/src/" + name + ".js";
  });
  glob.sync(__dirname + "/src/page/*.js").forEach(function (file) {
    var name = file.match(/([^/]+?)\.js/)[1];
    entry[name] = __dirname + "/src/page/" + name + ".js";
  });
  glob.sync(__dirname + "/src/runtime-canvas/*.js").forEach(function (file) {
    var name = file.match(/([^/]+?)\.js/)[1];
    entry[name] = __dirname + "/src/runtime-canvas/" + name + ".js";
  });
  glob.sync(__dirname + "/src/utils/*.js").forEach(function (file) {
    var name = file.match(/([^/]+?)\.js/)[1];
    entry[name] = __dirname + "/src/utils/" + name + ".js";
  });
  
  glob.sync(__dirname + "/main.js").forEach(function (file) {
    var name = file.match(/([^/]+?)\.js/)[1];
    entry[name] = __dirname + "/" + name + ".js";
  });
  return entry;
}
//used while add min ext
function getExt() {
  return debug ? ".min.js" : "js";
}
module.exports = {
  mode: 'production',
  entry: getEntry(),
  // entry: path.resolve(__dirname, './main.js'),
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, './dist'),
  // },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',// + getExt(),
    sourceMapFilename: '[file].map'
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: "file-loader",
          options: {
            outputPath: "./assets/",
            publicPath: "",
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                'corejs': '3',
                'useBuiltIns': 'usage'
              }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
   ],
  },
  plugins: [
    //opimize all image file
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i ,
      // optipng: {
      //   optimizationLevel: 4
      // },
      //this way seems better on mac.
      pngquant: {
        verbose:true,
        quality: '80-90',
      }
    })
  ]
}
