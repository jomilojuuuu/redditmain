import React from "react";
import Small_Card from "./Small_Card";
import Body from "./Body";

function Center() {
  return (
    <div>
      <div className="flex px-5 pt-5">
        <Small_Card />
        <Small_Card />
        <Small_Card />
      </div>
      <Body />
    </div>
  );
}

export default Center;
