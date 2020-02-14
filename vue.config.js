module.exports = {
    // options...
    devServer: {
        public: 'localhost',
        port: 8888,
        disableHostCheck: true,
    },
    css: {
        loaderOptions: {
          scss: {
            prependData: '@import "./src/assets/scss/root.scss";'
          }
        }
    },
    /* using vue-svg-loader
    chainWebpack: (config) => {
      const svgRule = config.module.rule('svg');

      svgRule.uses.clear();

      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader');
    },
    */
}
