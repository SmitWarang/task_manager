function TaskItem({ task, onDelete, onToggle, onEdit }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "10px" }}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title} ({task.priority})
      </h3>
      <p>{task.description}</p>
      <p>Category: {task.category}</p>
      <p>Due: {task.dueDate?.slice(0, 10) || "—"}</p>
      <p>Status: {task.completed ? "✅ Completed" : "⏳ Pending"}</p>
      <button onClick={() => onToggle(task._id)}>Toggle Complete</button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
