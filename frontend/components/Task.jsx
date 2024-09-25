import { useCallback, useState } from "react"
import './Task.css'

function Task({content}) {
    const [isCompleted, setIsCompleted] = useState(false)

    const changeIsCompleted = function () {
        if (isCompleted) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }

    const handleDeleteBtnClick = function (e) {
        e.stopPropagation();
        window.location.reload()
    }

    return (
        <div
        className="task"
        style={{backgroundColor: isCompleted ? "lightgreen" : "lightcoral"}}
        onClick={changeIsCompleted}
        >
            <p>{content}</p>
            <div className="button-div">
                <button onClick={handleDeleteBtnClick}>Delete</button>
            </div>
        </div>
    )
}

export default Task