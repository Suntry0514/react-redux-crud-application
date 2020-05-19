import { READ_EVENTS } from '../actions'
import _ from 'lodash'//dictionaryみたいなもの

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            //console.log(action.response.data)
            //第一引数：データ、　第二引数：キーにするデータ名
            //console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}