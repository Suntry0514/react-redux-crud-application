import React, { Component } from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'//画面上にリンクを設定

class EventsIndex extends Component {
  //コンポーネントがマウントされたときに呼ばれるメソッド
  //マウント：コンポーネントが画面にレンダリングされること
  //レンダリング：表示用のデータをもとに、内容を整形して表示すること
  componentDidMount() {
    this.props.readEvents()
  }
  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }
  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
        {/*以下のようすることで現在のURLに「/events/new」が追加されたURLがひらかれる*/}
        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}


//⓵ここで指定したstateの値が上記Appで受け取ることができる。
//state.eventsのeventsの名前はreducers/index.jsで宣言した変数名を使用しなければならない 
const mapStateToProps = state => ({ events: state.events })//read_eventsの戻り値

/* const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
 */
//⓶ここで指定したDispatchが上記Appのpropsで受け取ることができる。
//  actionsのAction Createrの部分
const mapDispatchToProps = ({ readEvents })

//ここでAppと上記で宣言した関数(⓵、⓶)とを結合する。(reducerのcountのdefaultが実行)
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

//実行するコンポーネントを指定
//export default App;

//イベント(actionのイベントタイプを指定) → App → count(値変更)
