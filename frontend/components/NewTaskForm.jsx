import { useState } from 'react'
import './NewTaskForm.css'

function NewTaskForm({currentDateProp}) {

    const [taskContent, setTaskContent] = useState('')

    const onUserInput = function (e) {
        let userInput = e.target.value 

        setTaskContent(userInput)
    }

    const testSubmit = async function (e) {
        e.preventDefault()
        
        const data = {
            taskContent
        }

        const url = "http://127.0.0.1:5000/add_task"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(url, options)

        window.location.reload()
    }

    return (
        <form onSubmit={testSubmit}>
            <div className="form-row">
                <input 
                placeholder="Enter the task..."
                onChange={onUserInput}
                />
            </div>
            <div className="form-row">
                <input
                value={currentDateProp}
                disabled={true}
                />
            </div>
            <div className="form-row">
                <button
                type='submit'
                disabled={taskContent.length == 0 || taskContent.length > 30 ? true : false}
                >
                    Add new task
                </button>
            </div>
        </form>
    )
}

export default NewTaskForm

