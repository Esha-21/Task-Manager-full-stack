export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div style={{ padding: 12, marginBottom: 10, border: "1px solid #ccc" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>

      <button onClick={() => onEdit(task)}>Edit</button>{" "}
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}
