import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/css/aio-wallet-style.css';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Provider } from 'react-redux';
import store from './redux/redux-toolkit';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Honeybadger from '@honeybadger-io/js';
import ErrorBoundary from '@honeybadger-io/react';

Honeybadger.configure({
  apiKey: '3f3902fa',
  environment: 'production',
});

ReactDOM.render(
  // <ErrorBoundary honeybadger={Honeybadger}>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  // </ErrorBoundary>,
  document.getElementById('root'),
);
