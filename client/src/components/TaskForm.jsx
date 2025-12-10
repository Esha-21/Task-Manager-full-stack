import React, { useState, useEffect } from "react";
import API from "../api";

export default function TaskForm({ onSave, editing }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Low",
    status: "Pending",
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const suggestTitle = async () => {
    const res = await API.post("/ai/suggest", {
      description: form.description,
    });
    setForm({ ...form, title: res.data.title });
  };

  const submit = () => onSave(form);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>{editing ? "Edit Task" : "Create Task"}</h3>

      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <br /><br />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <br /><br />

      <button onClick={suggestTitle}>Suggest Title (AI)</button>
      <br /><br />

      <select
        value={form.priority}
        onChange={(e) => setForm({ ...form, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <br /><br />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <br /><br />

      <button onClick={submit}>Save Task</button>
    </div>
  );
}
