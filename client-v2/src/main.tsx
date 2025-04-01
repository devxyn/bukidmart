import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Bounce, ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ToastContainer
          position='bottom-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition={Bounce}
        />
      </PersistGate>
    </Provider>
  </StrictMode>,
);
