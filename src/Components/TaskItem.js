import React, { useState } from 'react';

function TaskItem(props ,{setTask,task}) {                             //imported props and useState
  const [isEditing] = useState()                                       //useState for editing but it is Disabled
  const lineTask = () => {      
    props.lineTask(props.id);
  };
  const deleteTask = () => {
    props.deleteTask(props.id);
  };
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
    return (
      <>
      <tr>
        {isEditing ? (
          <>
            <td>
              <form onSubmit={handleSubmit}>
                <input
                  value={props.task}
                  onChange={handleChange}
                  autoFocus
                />
              </form>
            </td>
          </>
        ) : (
          <>
            <td className="task" onClick={lineTask}>
              <input
                type="checkbox"
                readOnly
                checked={props.taskItem.isCompleted}
              />
              <span
                className={
                  props.taskItem.isCompleted
                    ? 'completed'
                    : 'not-completed'
                }
              >
                {props.taskItem.task}
              </span>
            </td>
            <td>
              <button className="delete" onClick={deleteTask}>
                ✕
              </button>
            </td>
          </>
        )}
      </tr>
      </>
    );
  }
export default TaskItem;

//junk
  // const setEditingState = (isEditing) => {
  //   props.setTask({ isEditing: isEditing });
  // };
      // props.editTask(props.id, task);
    // setTask({ isEditing: false });
          //  <td>
          //     <button
          //       className="save"
          //       onClick={handleSubmit}
          //       type="submit"
          //     >
          //       Save
          //     </button>
          //     <button
          //       className="back"
          //       onClick={() => setEditingState(false)}
          //       type="button"
          //     >
          //       Back
          //     </button>
          //   </td> 