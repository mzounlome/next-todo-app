"use client";
import { FC } from "react";
import Image from "next/image";
import lightM from "../images/bg-mobile-light.jpg";
import moon from "../images/icon-moon.svg";
import Input from "./Input";
interface HeaderProps {
  inputChange: any;
  onSubmit: any;
}
//
const Header: FC<HeaderProps> = ({ inputChange, onSubmit }) => {
  return (
    <div className="h-60 w-full flex flex-col items-center relative">
      <div className="w-11/12 z-20 mt-8 flex justify-between">
        <h1 className="text-white text-3xl font-weight-700 z-20 ">T O D O</h1>
        <button>
          <Image height={30} width={30} src={moon} alt="moon" />
        </button>
      </div>
      <Image
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={lightM}
        alt="light-mobile"
      />
      <Input inputChange={inputChange} onSubmit={onSubmit} />
    </div>
  );
};

export default Header;
