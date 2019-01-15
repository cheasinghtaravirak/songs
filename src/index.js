import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //component property
import { createStore } from 'redux'; //method property

import App from './components/App';
import reducers from '../reducers'; //bc using export default 

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
