import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value : {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}


//⓵ここで指定したstateの値が上記Appで受け取ることができる。
const mapStateToProps = state => ({ value: state.count.value })

/* const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
 */
//⓶ここで指定したDispatchが上記Appのpropsで受け取ることができる。
//  actionsのAction Createrの部分
const mapDispatchToProps =({increment, decrement})

//ここでAppと上記で宣言した関数(⓵、⓶)とを結合する。(reducerのcountのdefaultが実行)
export default connect(mapStateToProps, mapDispatchToProps)(App)

//実行するコンポーネントを指定
//export default App;

//イベント(actionのイベントタイプを指定) → App → count(値変更)
