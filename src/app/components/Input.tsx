"use client";
import { FC } from "react";
import check from "../images/icon-check.svg";
import Image from "next/image";
interface InputProps {
  inputChange: any;
  onSubmit: any;
}
//
const Input: FC<InputProps> = ({ inputChange, onSubmit }) => {
  return (
    <div className="h-16 mt-10 rounded-sm w-11/12 bg-white   z-10 flex pl-4  justify-evenly items-center relative tablet:w-7/12 desktop:w-4/12">
      <div
        className="h-8 w-8 rounded-full flex items-center justify-center
       mr-3 relative  border-gray border-2"
      >
        {/* <Image height={15} width={15} src={check} alt="check" /> */}
      </div>
      <input
        onChange={inputChange}
        placeholder="Create a new todo..."
        className="h-full pl-12 w-11/12 p-2 "
      />
      <button
        onClick={onSubmit}
        className="bg-gradient-to-r from-blue-300 to-purple-400 text-white  h-full w-1/12 text-xs"
      >
        Enter{" "}
      </button>
    </div>
  );
};

export default Input;
