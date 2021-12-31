import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import courses from '../reducers/course'
import thunk from 'redux-thunk'
const store = createStore(
    combineReducers({ courses: courses }), {}, compose(applyMiddleware(thunk))
)
export default store