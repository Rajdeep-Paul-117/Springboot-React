import React, { useState } from 'react'
import Form from './Form'
import { deleteCourse } from '../action/course'
import { useDispatch } from 'react-redux'

function Course(course) {
    const dispatch = useDispatch()

    const { id, title, description } = course.course
    const [show, setshow] = useState(false)

    const handleForm = () => {
        setshow((show) => (!show))

    }
    const deleteHandler = () => {
        dispatch(deleteCourse(id))
    }
    return (
        <div className="card mb-1 ms-5 me-5 shadow rounded text-white text-center bg-secondary" >
            <div className="card-body">
                <h5 className="card-title">Course Title-{title}</h5>
                <h6 className="card-subtitle mb-2 text-light">Course Id-{id}</h6>
                <p className="card-text">{description}</p>
                <button className="card-link btn btn-warning" onClick={handleForm}>Edit</button>
                <button className="card-link btn btn-danger" onClick={deleteHandler}>Delete</button>
                {
                    show ? <Form course={course.course} show={handleForm} /> : ""
                }
            </div>
        </div>


    )
}

export default Course
