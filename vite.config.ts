import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'

const cherryPickedKeys = [
  'REACT_APP_NODE_ENV',
  'REACT_APP_LOCAL_API',
  'REACT_APP_GRAPHQL',
  'REACT_APP_SPORTS_API',
  'REACT_APP_ADMIN_API',
  'REACT_APP_PUSHER_KEY',
  'REACT_APP_PUSHER_HOST',
  'REACT_APP_BTI_BE',
  'REACT_APP_DEMO_MODE',
  'REACT_APP_ADMIN_API_REST'
]

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const processEnv: { [key: string]: string } = {}
  cherryPickedKeys.forEach((key) => (processEnv[key] = env[key]))

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [
      react(),
      svgr({
        svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg'
      })
    ],
    server: {
      port: 3000
    },
    css: {
      devSourcemap: true
    },
    build: {
      sourcemap: true
    },
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src')
      }
    }
  }
})
