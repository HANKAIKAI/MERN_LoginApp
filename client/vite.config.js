import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __REACT_APP_BASE_URL__: `"${process.env.REACT_APP_BASE_URL}"`,
  },
  plugins: [react()],
});
