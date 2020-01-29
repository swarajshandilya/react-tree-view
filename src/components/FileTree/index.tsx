import React from "react";
import "./index.css";

const handleClick = (content, props) => {
 props.updateContent(content);
}
const FileTree = (props) => {
  
  return (
    <div className="FileTree">
      <ul>{ 
          props.data.map( (obj, index) => 
          { 
            return <li key={index} onClick={handleClick.bind(null, obj.content, props)}>{obj.name}{obj.children && <FileTree data={obj.children} updateContent={props.updateContent} />}</li> 
          })
        }</ul>
    </div>
  );
};

export default FileTree;
