import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        VitePWA(),
        react(),
    ],
    resolve: {
        alias: {
            // Your CKEditor 5 editor import alias
            '@ckeditor/ckeditor5-editor-classic': resolve(
                __dirname,
                'node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditor'
            ),
        },
    }
});
