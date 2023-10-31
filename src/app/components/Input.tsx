"use client";
import { FC } from "react";
import check from "../images/icon-check.svg";
import Image from "next/image";
interface InputProps {}
//
const Input: FC<InputProps> = () => {
  return (
    <div className="h-16 mt-10 rounded-sm w-11/12  pr-44 z-10 bg-white flex px-4 items-center relative tablet:w-7/12 desktop:w-4/12">
      <div
        className="h-8 w-8 rounded-full flex items-center justify-center
       mr-3 relative bg-gradient-to-r from-blue-300 to-purple-400 border-gray border-2"
      >
        <Image height={15} width={15} src={check} alt="check" />
      </div>
      <input placeholder="Create a new todo..." className="h-12 w-11/12 p-2 " />
    </div>
  );
};

export default Input;
