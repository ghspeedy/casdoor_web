import { defineConfig ,splitVendorChunkPlugin} from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { viteRequire } from 'vite-require'
export default defineConfig({
  //base:'',
  plugins: [
    react(),
    nodePolyfills({
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true,
    }),
    // splitVendorChunkPlugin(),
    // viteRequire()
  ],
  // define: {
  //   'global': 'globalThis'
  // },
  server: {
    proxy: {
      "/api": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/swagger": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/files": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/.well-known/openid-configuration": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/cas/serviceValidate": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/cas/proxyValidate": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/cas/proxy": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
      "/cas/validate": {
        target: "http://39.106.146.61:8000",
        changeOrigin: true,
      },
    },
  }
});