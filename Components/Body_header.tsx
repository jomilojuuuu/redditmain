import React from "react";

function Body_header() {
  return (
    <div className="ml-1 w-[550px]">
      <div className="flex justify-between">
        <button className="rounded-full py-2 px-3 font-semibold flex bg-white border hover:bg-gray-300 items-center">
          Create a post
        </button>
        <div className="">
          <select className="rounded-full py-2 px-1 border-0 hover:bg-gray-200">
            <option className="">Best</option>
            <option className="">Hot</option>
            <option className="">New</option>
            <option className="">Top</option>
            <option className="">Rising</option>
          </select>
          <select className="rounded-full py-2 px-1 border-0 hover:bg-gray-200 mx-2">
            <option value="">Best</option>
            <option value="">Hot</option>
            <option value="">New</option>
            <option value="">Top</option>
            <option value="">Rising</option>
          </select>
          <select className="rounded-full border-0 hover:bg-gray-200">
            <option value="">st</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Body_header;
