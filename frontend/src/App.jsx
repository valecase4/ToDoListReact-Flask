import { useEffect, useState } from "react"
import "./App.css"

function App() {
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get_current_date")
            .then(response => response.json())
            .then(data => setCurrentDate(data.current_date))
            .catch(error => console.error("Error", error))
    })

    return (
        <>
            <h1>{currentDate}</h1>
        </>
    )
}

export default App
