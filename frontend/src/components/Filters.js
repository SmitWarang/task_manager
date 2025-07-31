function Filters({ filters, setFilters }) {
  return (
    <div className="filter-bar">
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, category: e.target.value }))
        }>
        <option value="">All Categories</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Study</option>
      </select>
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, priority: e.target.value }))
        }>
        <option value="">All Priorities</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, completed: e.target.value }))
        }>
        <option value="">All Status</option>
        <option value="true">Completed</option>
        <option value="false">Pending</option>
      </select>
    </div>
  );
}

export default Filters;
