import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { EditTodoForm } from './EditTodoForm'
import { Footer } from './Footer'
import { Header } from './Header'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { Filters } from './Filters'
import { getLocalStorageData, addDataInLocalStorage, deleteDataInLocalStorage, completeTodoInLocalStorage, editDataInLocalStorage } from "../server/main"

export const Todo = () => {
    const [todos, setTodos] = useState([])
    const [activeTab, setActiveTab] = useState("all"); // State to track the active tab 

    useEffect(()=>{
    const data = getLocalStorageData()
    setTodos(...todos,data)
      },[])

    const addToDo = todo => {
        const task = {
            id: Math.floor(Math.random()*1000), 
            title: todo, 
            completed: false,
            editing: false
        }
        const new_todos =[...todos, task]
        setTodos([...new_todos])
        addDataInLocalStorage(new_todos)
    }

    const completeTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed : !todo.completed} : todo
        ))
        completeTodoInLocalStorage(id)
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
        deleteDataInLocalStorage(id)
    }

    const editTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {
                ...todo, editing: !todo.editing
            }: todo)
        )
    }

    const editTask = (id, task) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {
                 ...todo,title:task, editing: !todo.editing
            }: todo)
        )
        editDataInLocalStorage(id, task)
    }

    const filteredTodos = todos.filter((todo) => {
        if (activeTab === "all") {
          return true; // Return all todos
        } else if (activeTab === "completed") {
          return todo.completed === true; // Return completed todos
        } else {
          return todo.completed === false; // Return pending todos
        }
      });

      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };  
    
  return (
    <>
        <Container fluid className='p-5 my-5 border rounded container-md bg-light.bg-gradient'>
            <Header />
            <TodoForm addToDo={addToDo}/>
            {todos.length === 0 && "Nothing to do!"}
           <Filters todos={todos} setActiveTab={setActiveTab} activeTab={activeTab} handleTabChange={handleTabChange}/> 
           {filteredTodos.length === 0 && "No tasks found!"}
            {filteredTodos.map((todo) =>
                todo.editing ? (
                  <EditTodoForm
                    task={todo}
                    editTask={editTask}
                    key={todo.id}
                   />  
                ) : (
                <TodoList 
                    task={todo} 
                    key={todo.id}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}  
                    editTodo={editTodo}  
                    />
            ))}
            <Footer todos={todos}/>
        </Container>
    </>
    
    
  )
}
