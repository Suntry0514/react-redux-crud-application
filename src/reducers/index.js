/*全リデゥーサーを１つに結合する*/
import {combineReducers} from 'redux'//リデゥーサーを結合するための関数
import events from './read_events'
import {reducer as form} from 'redux-form'

export default combineReducers({ events, form})
//以下のように複数記述することで１つにまとめられる
//export default combineReducers({ count, a, b})