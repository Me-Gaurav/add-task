import React from "react";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const { tasks, removeItem, editItem } = props;

  return (
    <div>
      {tasks.length === 0 ? (
        <div>
          <h2>No Tasks Found</h2>
          <p>Add your first task</p>
        </div>
      ) : (
        <div>
          <h2>My Tasks - {tasks.length}</h2>
          {tasks.map((task) => {
            return (
              <TaskItem
                key={task.id}
                {...task}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TasksList;
