import React from "react"
import { useParams } from "react-router"


export default function Project() {
    const {url} = useParams()

    return (
        <div className="container">
            <zero-md src={"/static/media/" + url}></zero-md>
        </div>
    )
}