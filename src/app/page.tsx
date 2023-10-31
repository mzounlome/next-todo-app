"use client";
import Header from "./components/Header";
import { useState } from "react";
import { tasks } from "./data";
import TaskStatus from "./components/TaskStatus";
import TodoList from "./components/TodoList";
export default function Home() {
  const [todos, setTodos] = useState(tasks);
  const [createTask, setCreateTask] = useState("");
  return (
    <div className="min-h-screen overflow-auto flex flex-col items-center bg-gray-100">
      <Header />
      <TodoList tasks={tasks} />
      <TaskStatus />
    </div>
  );
}
