import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'


const ROOT_URL='https://udemy-utils.herokuapp.com/api/v1'
const QUESRYSTRING ='?token=token123'

//Action Creater
/* export const readEvents = () => ({
        type: 'READ_EVENTS'
    }) */
//thunkにより関数の中でdispatchが可能になる
export const readEvents = () => async dispatch => {
    //axios：http requestの送信をする処理
    const response = await axios.get(ROOT_URL+'/events'+ QUESRYSTRING)
    //reducerを呼び出して値を渡す。dispatchで呼び出す
    dispatch({ type: 'READ_EVENTS' , response})//reade_events.jsを呼び出す
}