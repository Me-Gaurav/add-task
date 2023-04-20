import React from "react";
import axios from "axios";

import TaskForm from "./TaskForm";

const EditTask = (props) => {
  const { id, title, status, editItem, handleToggle } = props;

  const formSubmit = (task) => {
    axios
      .put(`http://localhost:3033/api/tasks/${task.id}`, task)
      .then((res) => {
        const result = res.data;
        editItem(result);
        handleToggle();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <p>Edit Task</p>
      <TaskForm id={id} title={title} status={status} formSubmit={formSubmit} />
    </div>
  );
};

export default EditTask;
