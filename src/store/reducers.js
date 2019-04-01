import { combineReducers } from 'redux'
import ToDoReducers from './reducers/toDoReducer'

const rootReducer = combineReducers({
    todo: ToDoReducers
})

export default rootReducer