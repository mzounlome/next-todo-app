"use client";
import Header from "./components/Header";
import { SetStateAction, useEffect, useState } from "react";
import { tasks } from "./data";
import TaskStatus from "./components/TaskStatus";
import TodoList from "./components/TodoList";
export default function Home() {
  const [todos, setTodos] = useState(tasks);
  const [createTask, setCreateTask] = useState("");

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

  return (
    <div className="min-h-screen overflow-auto flex flex-col items-center bg-gray-100">
      <Header inputChange={onInputChange} onSubmit={onSubmit} />
      <TodoList tasks={todos} />
      <TaskStatus />
    </div>
  );
}
