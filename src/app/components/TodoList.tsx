"use client";
import { FC } from "react";
import Image from "next/image";
import check from "../images/icon-check.svg";
import remove from "../images/icon-cross.svg";
import Todo from "./Todo";
interface TodoListProps {
  tasks: any;
  completeTodo: any;
  removeTodo: any;
  clearTodo: any;
  activeTab: any;
  setActiveTab: any;
}

const TodoList: FC<TodoListProps> = ({
  tasks,
  completeTodo,
  removeTodo,
  clearTodo,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="h-fit rounded-sm w-11/12 z-10 bg-white shadow-lg shadow-gray-250  flex flex-col tablet:w-7/12 desktop:w-4/12">
      {tasks
        .filter((task: any) => {
          switch (activeTab) {
            case "active":
              return task.completed === false;
            case "completed":
              return task.completed;
            default:
              return task;
          }
        })
        .map((task: any) => (
          <Todo
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            task={task}
            key={task.id}
          />
        ))}
      <div className="h-16 flex items-center justify-between px-6 text-sm text-gray-400">
        <p>{tasks.length} items left</p>
        <div className="w-11/12 phone:hidden flex flex-col items-center tablet:w-7/12 desktop:w-4/12 desktop:contents">
          <div className="h-14 w-full bg-white  flex  items-center justify-evenly">
            <button
              onClick={() => setActiveTab("all")}
              className="text-gray-400 focus:text-blue-700"
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("active")}
              className="text-gray-400 focus:text-blue-700"
            >
              Active
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className="text-gray-400 focus:text-blue-700"
            >
              Completed
            </button>
          </div>
        </div>
        <button onClick={() => clearTodo()}>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
