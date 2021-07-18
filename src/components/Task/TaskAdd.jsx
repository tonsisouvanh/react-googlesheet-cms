import React, { useState, useEffect } from "react";
import axios from "axios";
import tabletop from "tabletop";
function TaskAdd() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  const taskData = {
    taskName,
    taskDue,
    taskStatus,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/f8ec32fe-4369-4ddd-9ec1-0a3e9532b166",
        taskData
      )
      .then((res) => console.log("res", res));

    setTaskName("");
    setTaskDue("0000/00/00");
    setTaskStatus(false);
  };

  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) setTaskStatus(true);
    else if (checked) setTaskStatus(false);
  };

  const getTasks = async () => {
    tabletop.init({
      key: "1-coTK7ohSJyzRP4palB3iWazZRfnWjzglwRyHYKtAOo",
      callback: (googleData) => {
        setTasks(googleData);
      },
      simpleSheet: true,
    });
  };
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="task-form">
        <label className="task-name">Task:</label>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          className="task-name"
        />
        <label className="task-due">Due to:</label>
        <input
          value={taskDue}
          onChange={(e) => setTaskDue(e.target.value)}
          type="date"
          className="task-due"
        />
        <label className="task-status">DONE?</label>
        <input
          value={taskStatus}
          onChange={handleChecked}
          type="checkbox"
          defaultChecked={checked}
          className="task-status"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {tasks.map((t) => {
          return (
            <div>
              <h1>{t.taskName}</h1>
              <h1>{t.taskDue}</h1>
              <h1>{t.taskStatus}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TaskAdd;
