"use client";
import { FC } from "react";

interface TaskStatusProps {
  setActiveTab: any;
}
//
const TaskStatus: FC<TaskStatusProps> = ({ setActiveTab }) => {
  return (
    <div className="w-11/12 flex flex-col items-center tablet:w-7/12 desktop:w-4/12 desktop:hidden">
      <div className="h-14 w-full bg-white mt-5 flex  items-center justify-evenly">
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
      <div className="w-9/12 mt-8 mb-20 flex justify-center">
        <p className="text-gray-400">Drag and drop to reorder list</p>
      </div>
    </div>
  );
};

export default TaskStatus;
