/*全リデゥーサーを１つに結合する*/
import {combineReducers} from 'redux'//リデゥーサーを結合するための関数
import events from './read_events'

export default combineReducers({ events})
//以下のように複数記述することで１つにまとめられる
//export default combineReducers({ count, a, b})