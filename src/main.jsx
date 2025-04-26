import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css's
import App from './App.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.300',
      },
    },
  },
});
// import theme from './app_theme/theme.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ChakraProvider theme={theme}>
      <App />

      </ChakraProvider>
  </StrictMode>,
)
