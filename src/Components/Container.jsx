import React, { Children } from "react";

function Container({ children }) {
  return <div className="max-w-[1052px] mx-auto container">{children}</div>;
}

export default Container;
