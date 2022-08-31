import React, {  } from 'react';
import TaskItem from './TaskItem';

function TaskList(props) {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((task, index) => (           //Map func
            <TaskItem                                   //Imported for disp input 
              key={index}
              taskItem={task}
              id={index}
              deleteTask={props.deleteTask}
              // editTask={props.editTask}
              lineTask={props.lineTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
export default TaskList;
