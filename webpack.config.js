const path              = require('path');
const DtsBundleWebpack  = require('dts-bundle-webpack')

const libaryName        = "Power-Validator";

module.exports = {
  entry: './lib/PowerValidator.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'power-validator.min.js',
    library: 'PowerValidator',
    libraryTarget: 'umd'
  },
  plugins: [
    new DtsBundleWebpack({
      name: 'power-validator',
      main: path.resolve(__dirname, './lib/PowerValidator.d.ts'),
      out: path.resolve(__dirname, './dist/power-validator.d.ts'),
      verbose: true,
    })
  ]
};