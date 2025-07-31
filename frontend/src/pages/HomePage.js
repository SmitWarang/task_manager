import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";
import Filters from "../components/Filters";

function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    priority: "",
    completed: "",
  });
  const [editTask, setEditTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const params = {};
      if (filters.category) params.category = filters.category;
      if (filters.priority) params.priority = filters.priority;
      if (filters.completed !== "") params.completed = filters.completed;

      const res = await API.get("/tasks", { params });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user) return navigate("/login");
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const handleAdd = async (form) => {
    try {
      if (editTask) {
        await API.put(`/tasks/${editTask._id}`, form);
        setEditTask(null);
      } else {
        await API.post("/tasks", form);
      }
      fetchTasks();
    } catch (err) {
      alert("Error adding/updating task");
    }
  };

  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggle = async (id) => {
    await API.patch(`/tasks/${id}/complete`);
    fetchTasks();
  };

  return (
    <div className="container">
      <div className="header">
        {user ? (
          <h2 className="welcome-text">Welcome, {user.name}</h2>
        ) : (
          <h2 className="welcome-text">Welcome</h2>
        )}
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}>
          Logout
        </button>
      </div>

      <Filters filters={filters} setFilters={setFilters} />
      <TaskForm onSubmit={handleAdd} initialData={editTask} />

      {tasks.length === 0 ? (
        <div className="no-tasks">
          <p>No tasks found. Create your first task above!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
            onEdit={setEditTask}
          />
        ))
      )}
    </div>
  );
}

export default HomePage;
