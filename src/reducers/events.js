import _ from 'lodash'
import {
  CREATE_EVENT, 
  READ_EVENTS, 
  READ_EVENT, 
  UPDATE_EVENT, 
  DELETE_EVENT,
} from '../actions'

const initialState = { value: 0 }

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      console.log(action.id)
      delete events[action.id]
      return { ...events}
    default:
      return events
  }
}