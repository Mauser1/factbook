import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

import configureStore from './store';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider >
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
