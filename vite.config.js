import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),svgr(
    {
      // svgr options: https://react-svgr.com/docs/options/
      svgrOptions: {
        icon: true, // This is important! It makes SVGs behave more like icons
        // You can also add other options like:
        // memo: true, // For memoizing the component
         svgoConfig: {
           plugins: [
            {
               name: 'removeAttrs',
              params: {
                attrs: '(fill|stroke)', // This explicitly removes fill/stroke attributes
              },
             },
           ],
         },
      },
    }
  ),],
})
