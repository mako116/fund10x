// components/Checkbox.js
import { useState } from "react";

const Checkbox = ({ isChecked, toggleCheckbox }) => {
  return (
    <div className="checkboxContainer flex items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={toggleCheckbox}
        className="h-6 w-6 border-2 border-black rounded-[5px] cursor-pointer appearance-none"
        style={{
          backgroundColor: isChecked ? "black" : "transparent",
          backgroundImage: isChecked
            ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M9 16.2l-4.8-4.7-1.4 1.4 6.2 6.1 13.7-13.8-1.4-1.4L9 16.2z'/%3E%3C/svg%3E\")"
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <span className="checkboxLable ml-2 leading-[18.78px] font-normal  lg:text-[22.2px]">
        Accept terms of service{" "}
      </span>
    </div>
  );
};

export default Checkbox;
