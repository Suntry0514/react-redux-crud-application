import React, { createRef } from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'//storeを作成するための関数をimport
import {Provider} from 'react-redux'//作成したstoreを全コンポーネントに渡す
import reducer from './reducers'
import App from './components/App'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)


ReactDOM.render(
  //全階層からstoreを参照できるようにする
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
