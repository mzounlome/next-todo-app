"use client";
import { FC } from "react";
import Image from "next/image";
import check from "../images/icon-check.svg";
import remove from "../images/icon-cross.svg";
interface TodoProps {
  task: any;
  completeTodo: any;
  removeTodo: any;
}

const Todo: FC<TodoProps> = ({ task, completeTodo, removeTodo }) => {
  return (
    <div className="h-16  w-full rounded-sm z-10 bg-white flex items-center border-b-2 px-2 relative">
      <div className="w-1/12">
        <div
          className={`h-8 w-8 rounded-full flex items-center justify-center
       mr-3 relative  ${
         task.completed ? "bg-gradient-to-r from-blue-300 to-purple-400" : null
       } border-gray border-2`}
        >
          <button onClick={() => completeTodo(task.id)}>
            <Image height={15} width={15} src={check} alt="check" />
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <p
          className={`text-gray-600 w-80 text-sm px-4 ${
            task.completed ? "line-through" : null
          }`}
        >
          {task.name}
        </p>
        <button>
          <Image
            height={15}
            width={15}
            onClick={() => removeTodo(task.id)}
            src={remove}
            alt="remove"
          />
        </button>
      </div>

      {/* <div className="w-1/12 bg-white h-14">
        <div className="h-8 w-8 flex items-center justify-center">
          <button>
            <Image height={15} width={15} src={remove} alt="remove" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Todo;
