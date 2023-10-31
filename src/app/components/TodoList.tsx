"use client";
import { FC } from "react";
import Image from "next/image";
import check from "../images/icon-check.svg";
import remove from "../images/icon-cross.svg";
import Todo from "./Todo";
interface TodoListProps {
  tasks: any;
}

const TodoList: FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="h-fit rounded-sm w-11/12 z-10 bg-white shadow-lg shadow-gray-250  flex flex-col tablet:w-7/12 desktop:w-4/12">
      {tasks.map((task: any) => (
        <Todo task={task} key={task.id} />
      ))}
      <div className="h-16 flex items-center justify-between px-6 text-sm text-gray-400">
        <p>5 items left</p>
        <div className="w-11/12 phone:hidden flex flex-col items-center tablet:w-7/12 desktop:w-4/12 desktop:contents">
          <div className="h-14 w-full bg-white  flex  items-center justify-evenly">
            <button className="text-gray-400 focus:text-blue-700">All</button>
            <button className="text-gray-400 focus:text-blue-700">
              Active
            </button>
            <button className="text-gray-400 focus:text-blue-700">
              Completed
            </button>
          </div>
        </div>
        <button>Clear Completed</button>
      </div>
    </div>
  );
};

export default TodoList;
