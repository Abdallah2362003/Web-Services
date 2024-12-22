import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['lazysizes', 'vanilla-tilt'], // دمج القيمتين في مصفوفة واحدة
  },
  server: {
    historyApiFallback: true, // لإعادة التوجيه في المسارات
  },
  plugins: [react()],
});
