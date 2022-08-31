import React, { useState } from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

function Main() {
  const [task,setTask] = useState("");                                //useState for Input
  const [data,setData] = useState();                                  //useState for Storing data
  const tasks = localStorage.getItem('tasks')                         //LocalStorage for Storing data
  ? JSON.parse(localStorage.getItem('tasks'))                         //if there is data then store it else return empty obj
  : [];
  const createTask = (task) => {                                      //task is event/parameter here; for data
    if (task.trim() === '') {                                         //to Cut the useless spaces
      alert("Task can't be empty");                                   //And display Alert
      return;                                                         //Return nothing or else it will allow spacing after alert
    }
    tasks.push({ task, isCompleted: false });                         //isCompleted is property for lineThrough
    setTask({ id: task.length + 1, title:tasks, iscompleted: false}); //for displaying and storing data in state with id, title, and status 
    setData(task);                                                    //used state for storing data
    localStorage.setItem('tasks', JSON.stringify(tasks));             //LocalStorage for Data
    console.log("Value", tasks);                                      //Displaying data with index and title in ConsoleLog
  };
  const lineTask = (taskId) => {                                      //taskId is event/parameter here; for LineThrough
    const taskItem = tasks[taskId];                                   //new variable taken for input data
    taskItem.isCompleted = !taskItem.isCompleted;                     //completed or not completed with arithmatic updater
    setData({tasks:tasks});                                           //state for storing data
    localStorage.setItem('tasks', JSON.stringify(tasks));             //LocalStorage for LineThrough 
  };
  const deleteTask = (taskId) => {                                    //taskId is event/parameter here; for Deletion 
    tasks.splice(taskId, 1);                                          //splice method is use for deleting 1 array at a time 
    setTask( {tasks:tasks} );                                         //state for input
    localStorage.setItem('tasks', JSON.stringify(tasks));             //LocalStorage for Deleted 
  };
    return (
      <div className="main">
        <h1>Todo List</h1>                                           
        <div className="content">
          <CreateTask createTask={createTask} />                       {/*Exported function with props*/}
          <br />
          <TaskList
            tasks={tasks}                                              
            deleteTask={deleteTask}
            // editTask={editTask}
            lineTask={lineTask}                                        
          />
        </div>
      </div>
    );
}
export default Main;

// junk
  // const editTask = (taskId, task) => {
  //   const taskItem = tasks[taskId];
  //   taskItem.task = task;
  //   setTask( {tasks:tasks} );
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // };