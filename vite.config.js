import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      VITE_APP_BACKEND_URL: JSON.stringify(
        process.env.VITE_APP_BACKEND_URL || "http://localhost:3000"
      ),
    },
  },
});
