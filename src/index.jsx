import '@fontsource/inter';
import '@fontsource/poppins';
import "@/locales/i18n-config.js"

import {App} from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { myTheme } from '@/styles/theme.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={myTheme}>
    <App />
  </ChakraProvider>
)
