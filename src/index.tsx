import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import theme, { cacheRTL } from './setting/theme';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<CacheProvider value={cacheRTL}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <HelmetProvider>
        <Provider store={store}>
          <BrowserRouter>

              <App />  

          </BrowserRouter>
        </Provider>
      </HelmetProvider>
  </ThemeProvider>
</CacheProvider>

);



