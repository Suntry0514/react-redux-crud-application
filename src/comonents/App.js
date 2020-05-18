import React, { Component } from 'react';
//import React from 'react';

/*
    state：子コンポーネントに渡す値が変更可能(propは変更不可)
          クラスコンポーネントでのみ作成可能
*/

const App = () => (<Counter></Counter>)//Couterの呼び出し

class Counter extends Component {

  //constructor：初期化処理で処理される
  constructor(props) {
    super(props)
    this.state = { count: 0 }//stateに変数と値を設定
  }

  handlePlusButton = () => {
    console.log("handlePlusButton");
    //値を変更するときはsetStateで変更する！！！
    //setStateが実行されるとrenderが再度実行される
    this.setState({ count: this.state.count + 1 });
  }

  handleMinusButton = () => {
    if (this.state.count <= 0) {
      return;
    }
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <React.Fragment>
        <div>counter : {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


//実行するコンポーネントを指定
export default App;
