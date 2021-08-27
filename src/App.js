
import { useEffect, useState } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import ProjectsList from "./components/ProjectsList"
import {BrowserRouter, Route} from "react-router-dom"
import Project from "./components/Project"

function App() {
  const [files, setFiles] = useState([]);

  const importAll = (r) => {
    return r.keys().map(r)
  }

  useEffect(() => {
    setFiles(importAll(require.context('./', true, /\.(md)$/)))
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Navbar />
          <ProjectsList list={files}/>
        </Route>
        <Route path="/project/:url">
          <Project/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App
