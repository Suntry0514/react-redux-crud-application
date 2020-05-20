import { READ_EVENTS ,DELETE_EVENTS, READ_EVENT, UPDATE_EVENT, CREATE_EVENTS} from '../actions'
import _ from 'lodash'//dictionaryみたいなもの

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            //console.log(data)
            //data.idをキーにした情報を渡す
            return {...events, [data.id]: data}
        case READ_EVENTS:
            //console.log(action.response.data)
            //整形したデータを返している
            //第一引数：データ、　第二引数：キーにするデータ名
            //console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')

        case DELETE_EVENTS:
            //console.log(events)
            delete events[action.id]//eventsの中からid名のデータを削除
            //{...}：スレッド演算子。データをまとめて返すことができる
            return {...events}//新しく更新されたeventsをreutrn
        default:
            return events
    }
}