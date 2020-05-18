/*全リデゥーサーを１つに結合する*/
import {combineReducers} from 'redux'//リデゥーサーを結合するための関数
import cout from './count'

export default combineReducers({ count})
//以下のように複数記述することで１つにまとめられる
//export default combineReducers({ count, a, b})