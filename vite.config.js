import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base:'/casdoor_web',
  plugins: [react()],
  define: {
    'global': 'globalThis'
  },
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