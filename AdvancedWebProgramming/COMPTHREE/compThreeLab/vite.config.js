import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            react: path.resolve(process.cwd(), 'node_modules/react'),
            'react/jsx-runtime': path.resolve(process.cwd(), 'node_modules/react/jsx-runtime'),
            'react-dom': path.resolve(process.cwd(), 'node_modules/react-dom'),
        },
        dedupe: ['react', 'react-dom'],
    },
    optimizeDeps: {
        dedupe: ['react', 'react-dom'],
    },
});
