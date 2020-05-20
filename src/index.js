import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
//非同期処理を可能にする。アクションの代わりに関数を返すことができる
import thunk from 'redux-thunk'
//thunkはミドルウェアのため、applyMiddlewareをインポート
import { createStore, applyMiddleware } from 'redux';//storeを作成するための関数をimport
import { Provider } from 'react-redux';//作成したstoreを全コンポーネントに渡す
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import { composeWithDevTools } from 'redux-devtools-extension'//redux devtoolsをgoogle chromeで追加する
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import * as serviceWorker from './serviceWorker';
import muiThemeable from 'material-ui/styles/muiThemeable';

//デバッグの時はcomposeWithDevToolsを使う。
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

const store = createStore(reducer, enhancer)


ReactDOM.render(
  //全階層からstoreを参照できるようにする
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          {/** :id->：をつけることによって可変的なURLになる(events.indexのrenderEvents()部分参照)。変数名は何でもよい*/}
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
