import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import getStore from './redux';
import { Provider } from 'react-redux';
import { PrimeReactProvider } from 'primereact/api';



const store = getStore();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <PrimeReactProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </PrimeReactProvider>
    </BrowserRouter>
);

