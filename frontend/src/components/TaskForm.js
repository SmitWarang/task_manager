import { useState, useEffect } from "react";

function TaskForm({ onSubmit, initialData = null }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Work",
    priority: "Low",
    dueDate: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({ ...initialData, dueDate: initialData.dueDate?.slice(0, 10) });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      title: "",
      description: "",
      category: "Work",
      priority: "Low",
      dueDate: "",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>
      <select name="priority" value={form.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={form.dueDate}
        onChange={handleChange}
      />
      <button type="submit">{initialData ? "Update" : "Add"} Task</button>
    </form>
  );
}

export default TaskForm;
