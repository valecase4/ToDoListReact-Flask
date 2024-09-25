import { createRef, useEffect, useState } from "react"
import "./App.css"
import NewTaskForm from "../components/NewTaskForm"
import List from "../components/List"

function App() {
    const [currentDate, setCurrentDate] = useState('')
    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = async () => {
        const response = await fetch("http://127.0.0.1:5000/get_all_tasks")
        const data = await response.json()
        setAllTasks(data.tasks)
    }

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_current_date")
            .then(response => response.json())
            .then(data => setCurrentDate(data.current_date))
            .catch(error => console.error("Error", error))
    })

    return (
        <div className="wrapper" style={{overflowY: "hidden"}}>
            <div className="current-date">
                <h1>{currentDate}</h1>
            </div>
            <div className="container" style={{overflowY: "auto"}}>
                <div className="frame">
                    <NewTaskForm currentDateProp={currentDate}/>
                </div>
                <div className="frame" style={{overflowY: "auto"}}>
                    <List tasks={allTasks}/>
                </div>
            </div>
        </div>
    )
}

export default App
