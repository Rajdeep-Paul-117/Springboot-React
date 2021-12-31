import { FETCH_ALL, UPDATE, DELETE, CREATE } from "../constants/constants"
const courses = (state = { courses: [] }, action) => {

    switch (action.type) {
        case FETCH_ALL:
            return { ...state, courses: action.payload }
        case UPDATE:
            return { ...state, courses: state.courses.map((course) => (course.id === action.payload.id ? action.payload : course)) }
        case DELETE:
            return { ...state, courses: state.courses.filter((course) => (course.id !== action.payload)) }
        case CREATE:
            return { ...state, courses: [...state.courses, action.payload] }
        default:
            return state
    }

}
export default courses