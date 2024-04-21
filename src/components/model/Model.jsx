import React from "react";
import ReactDOM from "react-dom";

const Model = () => {
  if (typeof document === undefined) return <div className="model"></div>;
  return ReactDOM.createPortal(<div>
    
  </div>, document.querySelector("body"));
};

export default Model;
