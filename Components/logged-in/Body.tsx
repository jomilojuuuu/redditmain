import React from "react";
import Center from "./Center";
import Premium from "./Premium";

function Body() {
  return (
    <div className="bg-gray-300 h-screen py-5 px-36">
      <div className="flex gap-7 gay">
        <Center />
        <Premium />
      </div>
    </div>
  );
}

export default Body;
