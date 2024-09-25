import { useCallback, useState } from "react"
import './Task.css'

function Task({id, content}) {
    const [isCompleted, setIsCompleted] = useState(false)

    const changeIsCompleted = function () {
        if (isCompleted) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }

    const handleDeleteBtnClick = async function (e, id) {
        e.stopPropagation();

        const options = {
            method: "DELETE"
        }

        const response = await fetch(`http://127.0.0.1:5000/delete_task/${id}`, options)

        console.log(response)

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
                <button onClick={(e) => handleDeleteBtnClick(e, id)}>
                    <img src="media/delete.svg" alt="Delete" />
                </button>
            </div>
        </div>
    )
}

export default Task