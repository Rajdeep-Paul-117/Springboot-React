import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createCourse, updateCourse } from '../action/course'
function Form(props) {
    const dispatch = useDispatch()
    const initialCourse = { title: "", description: "" }
    const [formdata, setformdata] = useState(initialCourse)

    useEffect(() => {
        if (props.course)
            setformdata(props.course)
    }, [props.course])

    const handleInput = (e) => {
        const { name, value } = e.target

        setformdata({
            ...formdata,
            [name]: value
        })
    }
    const submitform = async (e) => {
        if (!props.course) {
            dispatch(createCourse(formdata))
        }
        else {
            dispatch(updateCourse(props.course.id, formdata))
        }

        setformdata(initialCourse)
        props.show()

    }
    return (
        <div className="modal show text-dark" style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{formdata ? "Edit" : "Add"} Course</h5>
                        <button type="button" className="btn-close" onClick={props.show}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label fs-3">Course Title</label>
                            <input type="text" name="title" className="form-control fs-5" value={formdata?.title} placeholder="React.." onChange={handleInput} ></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fs-3">Course Description</label>
                            <textarea className="form-control fs-5" name="description" rows="3" value={formdata?.description} onChange={handleInput} placeholder="This is a react course..."></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={props.show}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={submitform}>Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Form
