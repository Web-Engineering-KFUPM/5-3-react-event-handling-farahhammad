import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
    if (!tasks || tasks.length === 0) {
        return <p className="empty">No tasks yet. Add something above 👆</p>;
    }
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}


      {/* Task 2 & 3 – Map tasks to TaskItem */}
        {tasks.map((task) => (
            <TaskItem key={task.id} id={task.id} text={task.text} />
        ))}
      
    </ul>
  );
}
