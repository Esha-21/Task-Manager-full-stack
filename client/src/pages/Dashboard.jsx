import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

export default function Dashboard() {
  const nav = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) nav("/");

    loadTasks();
  }, []);

  const saveTask = async (task) => {
    if (editing) {
      await API.put(`/tasks/${editing._id}`, task);
    } else {
      await API.post("/tasks", task);
    }
    setEditing(null);
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <div>
      <button onClick={logout}>Logout</button>

      <TaskForm onSave={saveTask} editing={editing} />

      {tasks.map((task) => (
        <TaskCard key={task._id} task={task}
          onEdit={setEditing}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}
