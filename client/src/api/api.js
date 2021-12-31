import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8080' })

export const fetchCourses = () => API.get(`/course`)
export const fetchCourseByID = (id) => API.get(`/course/${id}`)
export const createCourse = (course) => API.post(`/course/`, course)
export const updateCourse = (id, course) => API.put(`/course/${id}`, course)
export const deleteCourse = (id) => API.delete(`/course/${id}`)
