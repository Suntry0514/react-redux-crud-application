import { READ_EVENTS ,DELETE_EVENTS} from '../actions'
import _ from 'lodash'//dictionaryみたいなもの

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            //console.log(action.response.data)
            //整形したデータを返している
            //第一引数：データ、　第二引数：キーにするデータ名
            //console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            console.log(events)
            delete events[action.id]//eventsの中からid名のデータを削除
            //{...}：スレッド演算子。データをまとめて返すことができる
            return {...events}//新しく更新されたeventsをreutrn
            return events
        default:
            return events
    }
}