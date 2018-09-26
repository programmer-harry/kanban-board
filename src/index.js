import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import tasks from './reducers'
import App from './App';
import './index.css';

/**
 * createStore(reducer, initialState, enhancer)
 */

const store = createStore(tasks, devToolsEnhancer())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
