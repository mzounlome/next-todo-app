"use client";
import Header from "./components/Header";
import { SetStateAction, useEffect, useState } from "react";
import { tasks } from "./data";
import TaskStatus from "./components/TaskStatus";
import TodoList from "./components/TodoList";
import { clear } from "console";
export default function Home() {
  const [todos, setTodos] = useState(tasks);
  const [createTask, setCreateTask] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const onInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCreateTask(e.target.value);
    console.log(createTask);
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const newToDo = {
      id: todos.length + 1,
      name: createTask,
      completed: false,
    };
    setTodos([...todos, newToDo]);
    setCreateTask("");
  };
  const completeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearTodo = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filterTodo = (id: number) => {};
  console.log(activeTab);
  return (
    <div className="min-h-screen overflow-auto flex flex-col items-center bg-gray-100">
      <Header inputChange={onInputChange} onSubmit={onSubmit} />
      <TodoList
        activeTab={activeTab}
        tasks={todos}
        clearTodo={clearTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        setActiveTab={setActiveTab}
      />
      <TaskStatus setActiveTab={setActiveTab} />
    </div>
  );
}
