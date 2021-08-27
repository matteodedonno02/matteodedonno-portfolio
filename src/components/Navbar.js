import React from "react"
import meImage from "../assets/img/me.jpg"
import "../assets/style/Navbar.css"

export default function Navbar() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12 align-self-center">
                    <h1>Matteo De Donno</h1>
                    <figcaption className="blockquote-footer custom-blockquote">
                        Computer Science Student - UniTo
                    </figcaption>
                </div>
                <div className="col-md-6 col-sm-12 align-self-center profile-image-col">
                    <div className="profile-image-container d-flex justify-content-center">
                        <img src={meImage} className="img-fluid img-thumbnail profile-image" alt="Matteo De Donno" />
                    </div>
                </div>
            </div>
        </div>
    )
}