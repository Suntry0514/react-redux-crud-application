import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'//画面上にリンクを設定
import { Field, reduxForm } from 'redux-form'

import { getEvent,  putEvent , deleteEvent} from '../actions'

class EventsShow extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)//メソッドとイベントをリンク
  }
  //レンダリング後、毎回実行される
  componentDidMount(){
    const{id} = this.props.match.params
    //idがあったら
    if(id)this.props.getEvent(id)
  }

  //入力された値が渡ってくる
  renderFiled(field) {
    const { input, label, type, meta: { touched, error } } = field
    return (
      <div>
        {/*placeholder：灰色の薄透明な文字を表示  {...input}:？？？？？？？？？？？？*/}
        <input {...input} placeholder={label} type={type} />
        {/*バリデーションのメッセージ表示 touched：1度でも触ったらtrueになる*/}
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  //valuesの値が入ってくる
  async onSubmit(values) {
    await this.props.putEvent(values)
    //以下のように記述することで指定したURLのページに実行後、移動することができる。
    this.props.history.push('/')
  }

  async onDeleteClick() {
    //console.log(this.props.match)//渡ってくるデータを確
    //以下の{}はデータの塊の中から特定の変数を取得するためのもの。
    //つまり{}ないに記述された変数がデータ内にあれば取得できる。
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }
  render() {
    //handleSubmitはrenderが実行されたときに渡ってくる関数のため、値を渡しておく
    const { handleSubmit, pristine, submitting , invalid} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderFiled} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderFiled} /></div>
        <div>
          {/*pristine：項目入力時ボタンが押せる、　submitting：ボタンを押した後、ボタンを押せなくする*/}
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
          <Link to="/">CANCEL</Link>
          <Link to="/" onClick={this.onDeleteClick}>DELETE</Link>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = ({ deleteEvent ,getEvent, putEvent})

const mapStateToProps=(state, ownProps)=>{
  const event = state.events[ownProps.match.params.id]
  return {initialValues: event, event}//左：上記の変数。
}

const validate = values => {
  const errors = {}
  //入力されていなかったら
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}
//ここでAppと上記で宣言した関数(⓵、⓶)とを結合する。(reducerのcountのdefaultが実行)
export default connect(mapStateToProps, mapDispatchToProps)(
  //以下でreduxForm関数で帰ってくる関数の引数にEventsShowを渡している
  //enableReinitialize:true　＝＞initialValuesの値が変わるたびにFormが毎回初期化される
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize:true })(EventsShow)
)
