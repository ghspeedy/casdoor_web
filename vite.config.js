import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  define:{
    'global':'globalThis'
  }
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/swagger": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/files": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/.well-known/openid-configuration": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/cas/serviceValidate": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/cas/proxyValidate": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/cas/proxy": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //     "/cas/validate": {
  //       target: "http://localhost:8000",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});