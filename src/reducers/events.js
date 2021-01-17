import _ from 'lodash'
import {
  READ_EVENTS, 
  DELETE_EVENTS,
} from '../actions'

const initialState = { value: 0 }

export default (state = {}, action) => {
  switch (action.type) {
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