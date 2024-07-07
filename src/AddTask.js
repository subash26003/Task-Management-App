import React from "react";

const AddTask = ({newTask,setnewTask,handleSubmitBtn}) =>{
    return(
        <div className="addTaskCard">
            <form className="addTaskForm">
                <label 
                htmlFor="addTaskLabel"
                >Add Task</label>
                <input 
                id="addTaskLabel" 
                type="text" 
                placeholder="Enter the Task" 
                value ={newTask} 
                onChange={(e) => setnewTask(e.target.value)}
                />
                <button type="submit" onClick={(e) => handleSubmitBtn(e)}>Add</button>

            </form>
        </div>
    )
}
export default AddTask