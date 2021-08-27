import React from "react"

export default function ProjectsList(props) {
    return (
        <div className="container">
            <h2>Projects</h2>
            <ul className="list-group">
                {props.list.map((project, i) => {
                    if(!project.default.split("/")[3].split(".")[0].replaceAll("_", " ").includes("PRIVATE")) {
                        return <li key={i} className="list-group-item"><a href={"project/" + project.default.split("/")[3]}>{project.default.split("/")[3].split(".")[0].replaceAll("_", " ")}</a></li>
                    }
                    return null
                })}
            </ul>
        </div>
    )
}