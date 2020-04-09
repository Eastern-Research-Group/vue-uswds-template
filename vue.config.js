module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, // this can be set to true, but may cause issues if you already lint on save from your IDE
  css: {
    loaderOptions: {
      scss: {
        // Import variables scss module into all vue components, so we can access uswds mixins and our own defined css variables
        prependData: `@import "~@/assets/styles/_variables.scss";`,
      },
    },
  },
};
