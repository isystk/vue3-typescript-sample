const path = require('path')

module.exports = {
  staticDirs: ['../public'],
  framework: '@storybook/vue3',
  viteFinal: async (config, { configType }) => {
    // // scss
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   use: ['style-loader', 'css-loader', 'sass-loader'],
    //   include: path.resolve(__dirname, '../src/styles'),
    // });
    // alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },
  core: {
    builder: 'storybook-builder-vite',
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
}
