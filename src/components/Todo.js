import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { EditTodoForm } from "./EditTodoForm";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { Filters } from "./Filters";
import {
  getLocalStorageData,
  addDataInLocalStorage,
  deleteDataInLocalStorage,
  completeTodoInLocalStorage,
  editDataInLocalStorage,
} from "../server/main";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [filtredtodos, setFiltredTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("all"); //State to track the active tab

  useEffect(() => {
    const localStorage_data = getLocalStorageData();
    setTodos(...todos, localStorage_data);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filteredTodos();
    // eslint-disable-next-line
  }, [todos]);

  const addToDo = (todo) => {
    const task = {
      id: Math.floor(Math.random() * 1000),
      title: todo,
      completed: false,
      editing: false,
    };
    const new_todos = [...todos, task];
    setTodos([...new_todos]);
    addDataInLocalStorage(new_todos);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
    completeTodoInLocalStorage(id);
  };

  const deleteTodo = (id) => {
    todos && setTodos(todos.filter((todo) => todo.id !== id));
    deleteDataInLocalStorage(id);
  };

  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              editing: !todo.editing,
            }
          : todo
      )
    );
  };

  const updateTask = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: task,
              editing: !todo.editing,
            }
          : todo
      )
    );
    editDataInLocalStorage(id, task);
  };

  const filteredTodos = (tab = "all") => {
    switch (tab) {
      case "all":
        setFiltredTodos(todos);
        break;
      case "completed":
        let completed_todos = todos.filter((item) => item.completed === true);
        setFiltredTodos(completed_todos);
        break;
      case "pending":
        let pending_todos = todos.filter((item) => item.completed === false);
        setFiltredTodos(pending_todos);
        break;
      default:
        setFiltredTodos(todos);
        break;
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    filteredTodos(tab);
  };

  return (
    <>
      <Container
        fluid
        className="p-5 my-5 border rounded container-md min-vh-100"
      >
        <Header />
        <TodoForm addToDo={addToDo} />
        {todos.length === 0 && (
          <p className="mb-10 text-warning">"Nothing to do!"</p>
        )}
        <Filters
          todos={todos}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          handleTabChange={handleTabChange}
        />
        {filtredtodos.length < 1 ? (
          <p className="mt-2 text-warning">"No tasks found!"</p>
        ) : (
          filtredtodos.map((todo) =>
            todo.editing ? (
              <EditTodoForm task={todo} updateTask={updateTask} key={todo.id} />
            ) : (
              <TodoList
                task={todo}
                key={todo.id}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                editTask={editTask}
              />
            )
          )
        )}

        <Footer todos={todos} />
      </Container>
    </>
  );
};
