import React, { useState } from "react";
import axios from "axios";

import EditTask from "./EditTask";

const TaskItem = (props) => {
  const [toggle, setToggle] = useState(false);
  const { id, title, status, removeItem, editItem } = props;

  const url = `http://localhost:3033/api/tasks/${id}`;

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure");
    if (confirmRemove) {
      axios
        .delete(url)
        .then((res) => {
          const result = res.data;
          removeItem(result.id);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {toggle ? (
        <div>
          <EditTask
            id={id}
            title={title}
            status={status}
            editItem={editItem}
            handleToggle={handleToggle}
          />
          <button onClick={handleToggle}>cancel</button>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
          <button onClick={handleToggle}>edit</button>
          <button onClick={handleRemove}>remove</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
