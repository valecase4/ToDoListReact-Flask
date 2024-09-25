import { useState } from 'react'
import './NewTaskForm.css'

function NewTaskForm({currentDateProp}) {

    const [taskContent, setTaskContent] = useState('')

    const onUserInput = function (e) {
        let userInput = e.target.value 

        setTaskContent(userInput)
    }

    const testSubmit = function () {
        console.log(taskContent)
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
                disabled={taskContent.length == 0 ? true : false}
                >
                    Add new task
                </button>
            </div>
        </form>
    )
}

export default NewTaskForm

