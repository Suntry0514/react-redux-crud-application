import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'//画面上にリンクを設定
import { Field, reduxForm} from 'redux-form'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
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
  async onSubmit(values){
    await this.props.postEvent(values)
    //以下のように記述することで指定したURLのページに実行後、移動することができる。
    this.props.history.push('/')
  }

  render() {
    //handleSubmitはrenderが実行されたときに渡ってくる関数のため、値を渡しておく
    const {handleSubmit, pristine, submitting, invalid} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderFiled} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderFiled} /></div>
        <div>
          {/*pristine：項目入力時ボタンが押せる、　submitting：ボタンを押した後、ボタンを押せなくする*/}
          <input type="submit" value="Submit" disabled={pristine||submitting ||invalid} />
          <Link to="/">CANCEL</Link>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = ({ postEvent })

const validate = values => {
  const errors = {}
   //入力されていなかったら
  if(!values.title) errors.title="Enter a title, please."
  if(!values.body) errors.body="Enter a body, please."

  return errors
}
//ここでAppと上記で宣言した関数(⓵、⓶)とを結合する。(reducerのcountのdefaultが実行)
export default connect(null, mapDispatchToProps)(
  //以下でreduxForm関数で帰ってくる関数の引数にEventsNewを渡している
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
