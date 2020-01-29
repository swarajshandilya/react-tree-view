import React from "react";
import "./index.css";

const FileContent = (props) => {
  return (
    <div className="FileContent">
      {props.content}
    </div>
  );
};

export default FileContent;
