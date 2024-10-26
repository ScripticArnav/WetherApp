// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': 'wether-app-sqjf-bnxew6iie-arnav-saxenas-projects.vercel.app'
        }
    }
});
