import React, { useState } from 'react';

function CreateTask(props) {                               //props imported
  const [task,setTask] = useState([""]);                   //Using State for input
  const handleChange = (event) => {                        //func
    setTask(event.target.value);                           //for fetching value only
    console.log("Typing Input")                            //ConsoleLog disp
  };
  const handleSubmit = (event) => {                        //func
    // event.preventDefault();                                //prevents from refreshing and redirecting to new page
    props.createTask(task);                                //props imported func for input
    console.log("Data Submited")                           //ConsoleLog disp
  };
  return (
      <form onSubmit={handleSubmit}>                        {/* func on pressing submit button */}
        <input                                               /* for input field */
          type="text"
          placeholder="Enter task"
          value={props.tasks}                                /* (tasks is imported props and used for entering vals)*/
          onChange={handleChange}                            /* onChange handleSubmit is run */
          maxLength="15"
          autoFocus
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
export default CreateTask;