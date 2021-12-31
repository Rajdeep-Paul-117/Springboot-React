import React, { useState } from 'react'
import Form from './Form'
function Header() {
    const [show, setshow] = useState(false)
    const handleForm = () => {
        setshow((show) => (!show))

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand mb-0">springboot-react</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <button className="btn nav-link pb-1" onClick={handleForm} >Add Course</button>
                        </li>
                    </ul>
                </div>
            </div>
            {
                show ? <Form show={handleForm} /> : ""
            }
        </nav>
    )
}

export default Header
