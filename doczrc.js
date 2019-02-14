const path = require('path');

module.exports = {
  title: 'Vital UI Kit React Native',
  typescript: true,
  native: true,
  modifyBundlerConfig: config => {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules[/\\](?!react-native-vector-icons)/,
      use: {
        loader: 'babel-loader',
        options: {
          // Disable reading babel configuration
          babelrc: false,
          configFile: false,
          // The configration for compilation
          presets: [
            ['@babel/preset-env', { useBuiltIns: 'usage' }],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
          ],
        },
      },
    });
    return config;
  },
};
