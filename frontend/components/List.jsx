import { useEffect, useState } from "react";
import Task from "./Task";
import './List.css'

function List({tasks}) {

    return (
        <div className="list">
            {tasks.map(task => (
                <div key={task.id}>
                    <Task id={task.id} content={task.content} />
                </div>
            ))}
        </div>
    )
}

export default List