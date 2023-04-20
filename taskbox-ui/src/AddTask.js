import React, { useState } from "react";
import axios from "axios";

import TaskForm from "./TaskForm";

const url = "http://localhost:3033/api/tasks";

const AddTask = (props) => {
  const [isSaved, setIsSaved] = useState(false);

  const { addItem } = props;

  const formSubmit = (task) => {
    axios
      .post(url, task)
      .then((response) => {
        addItem(response.data);
        setIsSaved(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const toggle = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <h2>Add Task</h2>
      <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggle={toggle} />
    </div>
  );
};

export default AddTask;
