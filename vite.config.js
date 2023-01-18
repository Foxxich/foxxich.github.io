const glob = require("glob");
const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "*.html"), {
        windowsPathsNoEscape: true,
      }),
    },
  },
  resolve: {
    alias: {
      "~assets": path.resolve(__dirname, "src/assets"),
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": path.resolve(__dirname, "node_modules/bootstrap-icons"),
    },
  },
};
