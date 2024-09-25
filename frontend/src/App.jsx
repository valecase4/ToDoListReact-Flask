import { createRef, useEffect, useState } from "react"
import "./App.css"
import NewTaskForm from "../components/NewTaskForm"

function App() {
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_current_date")
            .then(response => response.json())
            .then(data => setCurrentDate(data.current_date))
            .catch(error => console.error("Error", error))
    })

    return (
        <div className="wrapper">
            <div className="current-date">
                <h1>{currentDate}</h1>
            </div>
            <div className="container">
                <div className="frame">
                    <NewTaskForm currentDateProp={currentDate}/>
                </div>
                <div className="frame"></div>
            </div>
        </div>
    )
}

export default App
