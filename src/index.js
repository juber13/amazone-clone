import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  {store} from './reduxStore/store';
import { Provider } from 'react-redux';
import Context from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
     <BrowserRouter>
       <Context>
         <App />
       </Context>
     </BrowserRouter>
    </React.StrictMode>
  </Provider>
);