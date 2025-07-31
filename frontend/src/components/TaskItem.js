function TaskItem({ task, onDelete, onToggle, onEdit }) {
  return (
    <div
      className={`task-item priority-${task.priority.toLowerCase()} ${
        task.completed ? "completed" : ""
      }`}>
      <div className="task-header">
        <h3 className={`task-title ${task.completed ? "completed" : ""}`}>
          {task.title}
        </h3>
        <span
          className={`priority-badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      <div className="task-meta">
        <div className="task-meta-item category">
          <span>Category: {task.category}</span>
        </div>
        <div className="task-meta-item due-date">
          <span>Due: {task.dueDate?.slice(0, 10) || "No due date"}</span>
        </div>
        <div
          className={`task-meta-item status ${
            task.completed ? "completed" : ""
          }`}>
          <span>Status: {task.completed ? "Completed" : "Pending"}</span>
        </div>
      </div>

      <div className="task-actions">
        <button className="toggle-btn" onClick={() => onToggle(task._id)}>
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button className="edit-btn" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
