import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import projectImages from './vite-plugin-project-images'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), projectImages()],
})
