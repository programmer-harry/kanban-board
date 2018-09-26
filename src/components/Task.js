import React from 'react';
import { TASK_STATUSES } from '../constants';

const Task = ({ task: { id, title, description, status }, onStatusChange }) => {
  function changeStatus(e) {
    onStatusChange(id, e.target.value)
  }

  return (
    <div className="task">
    <div className="task-header">
      <div>{title}</div>
      <select value={status} onChange={changeStatus}>
        {TASK_STATUSES.map((tStatus, index) => <option key={index} value={tStatus}>{tStatus}</option>)}
      </select>
    </div>
    <hr />
    <div className="task-body">{description}</div>
  </div>
  )
}

// const Task = props => {
//   console.log(props)
//   return (
//     <div className="task">
//       <div className="task-header">
//         <div>{props.task.title}</div>
//         <select value={props.task.status} onChange={onStatusChange}>
//           {TASK_STATUSES.map(status => (
//             <option key={status} value={status}>{status}</option>
//           ))}
//         </select>
//       </div>
//       <hr />
//       <div className="task-body">{props.task.description}</div>
//     </div>
//   );

//   function onStatusChange(e) {
//     props.onStatusChange(props.task.id, e.target.value);
//   }
// };

export default Task
