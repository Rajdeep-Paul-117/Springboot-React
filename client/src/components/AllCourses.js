import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCourses } from '../action/course'
import Course from './Course'
function AllCourses() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourses())
    }, [dispatch])
    const { courses } = useSelector(state => state.courses);

    return (
        <div className="mt-2">
            {courses?.map((course, id) => (
                < Course key={id} course={course} />
            ))}
        </div>

    )
}

export default AllCourses
