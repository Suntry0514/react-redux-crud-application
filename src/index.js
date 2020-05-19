import React from 'react';
import ReactDOM from 'react-dom';

//非同期処理を可能にする。アクションの代わりに関数を返すことができる
import thunk from 'redux-thunk'
//thunkはミドルウェアのため、applyMiddlewareをインポート
import {createStore ,applyMiddleware} from 'redux'//storeを作成するための関数をimport
import {Provider} from 'react-redux'//作成したstoreを全コンポーネントに渡す
import reducer from './reducers'
import EventsIndex from './components/events_index'

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  //全階層からstoreを参照できるようにする
  <Provider store={store}>
  <EventsIndex />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
