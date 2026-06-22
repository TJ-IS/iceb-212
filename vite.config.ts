export default {
  build: {
    rollupOptions: {
      onwarn(warning: any, defaultHandler: any) {
        if (warning.code === 'INVALID_ANNOTATION') {
          return
        }
        defaultHandler(warning)
      }
    }
  }
}
