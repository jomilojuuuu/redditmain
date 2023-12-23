import React from "react";
import Body_header from "./Body_header";
import Communities from "./Communities";
import Post from "./Post";

function Body() {
  return (
    <div className="flex ml-10 w-[550px] mt-10">
      <div>
        <Body_header />
        <Post />
      </div>
      <div>
        <Communities />
      </div>
    </div>
  );
}

export default Body;
