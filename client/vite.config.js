import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    //__REACT_APP_BASE_URL__: `"${process.env.REACT_APP_BASE_URL}"`,
    //__REACT_APP_BASE_URL__: "http://127.0.0.1:8080",
  },
  plugins: [react()],
});
