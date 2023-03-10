import React, { useContext } from "react";
import MyContext from "../Context";

const More = () => {
  const { dark } = useContext(MyContext);
  return (
    <div className={`contai ${dark ? "dark-mode" : "white-mode"}`}>
      <div className="pt-5 text-center">
        <h1>This is my More page</h1>
      </div>
    </div>
  );
};

export default More;
