import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend-mentor-stats-preview-card-component/',
  plugins: [vue()],
})
