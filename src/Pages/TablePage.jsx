import React, { useEffect, useState } from 'react';
import './TablePage.css';

const TablePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [entries, setEntries] = useState(15); // ⬅ ENTRIES DROPDOWN (10,20,50,100)

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    };
    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.completed
        : !todo.completed;

    return matchesSearch && matchesFilter;
  });

  const indexOfLast = currentPage * entries;
  const indexOfFirst = indexOfLast - entries;
  const currentTodos = filteredTodos.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredTodos.length / entries);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="page-box">
      <h1>Todos Table</h1>

      {/* Search + Filter + Entries Dropdown */}
      <div className="controls">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        {/* Entries Dropdown */}
        <select
          value={entries}
          onChange={(e) => {
            setEntries(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value="0">Entries</option>
          <option value="10">10 Entries</option>
          <option value="20">20 Entries</option>
          <option value="50">50 Entries</option>
          <option value="100">100 Entries</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <table className="todo-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {currentTodos.length > 0 ? (
                currentTodos.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td className={todo.completed ? "completed" : "pending"}>
                      {todo.completed ? "Completed" : "Pending"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No results found</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Prev/Next Pagination */}
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </button>

            <span className="page-info">
              Page {currentPage} of {totalPages}
            </span>

            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TablePage;
