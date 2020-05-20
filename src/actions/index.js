import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENTS'
export const DELETE_EVENTS = 'DELETE_EVENTS'


const ROOT_URL='https://udemy-utils.herokuapp.com/api/v1'
const QUESRYSTRING ='?token=token123'

//Action Creater
/* export const readEvents = () => ({
        type: 'READ_EVENTS'
    }) */
//thunkにより関数の中でdispatchが可能になる
export const readEvents = () => async dispatch => {
    //axios：http get requestの送信をする処理
    const response = await axios.get(ROOT_URL+'/events'+ QUESRYSTRING)
    //reducerを呼び出して値を渡す。dispatchで呼び出す
    dispatch({ type: 'READ_EVENTS' , response})//reade_events.jsを呼び出す
}

//入力されたtitleとbodyを受け取る
export const postEvent = (values) => async dispatch => {
    //axios：http post requestの送信をする処理
    const response = await axios.post(ROOT_URL+'/events'+ QUESRYSTRING, values)//valuesのデータを送信する
    console.log(values)
    console.log(response.data)
    //reducerを呼び出して値を渡す。dispatchで呼び出す
    dispatch({ type: CREATE_EVENTS , response})//reade_events.jsを呼び出す
}

export const deleteEvent = (id) => async dispatch => {
    //axios：http post requestの送信をする処理
    await axios.delete(ROOT_URL+'/events/'+ id+QUESRYSTRING)//valuesのデータを送信する
    //reducerを呼び出して値を渡す。dispatchで呼び出す
    dispatch({ type: DELETE_EVENTS , id})//reade_events.jsを呼び出す
}