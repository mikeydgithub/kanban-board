import React, { useState } from "react";

const AddTask = ({ socket }) => {
    const [task, setTask] = useState("");

    const handleAddToDo = (e) => {
        e.preventDefault();
        // logs the task to the console
        console.log({ task });
        setTask("")
    };

    return (
        <form className="form__input" onSubmit={handleAddToDo}>
            <label htmlFor="task">Add To Do</label>
            <input
            type="text"
            name="task"
            id="task"
            value={task}
            className="input"
            required
            onChange={(e) => setTask(e.target.value)}
            />
            <button className="addTodoBtn">ADD TO DO</button>
        </form>
    );
};

export default AddTask;