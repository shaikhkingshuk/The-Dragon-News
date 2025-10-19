import React from "react";
import headerLogo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img className="h-[60px]" src={headerLogo}></img>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE, LLLL d, yyyy")}{" "}
      </p>
    </div>
  );
};

export default Header;
