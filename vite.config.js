import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/my-portfolio/', // Make sure this line is exactly here with both slashes
  plugins: [
    react(),
    tailwindcss(),
  ],
})