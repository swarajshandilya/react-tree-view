import React, { useState } from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import fileFixtures from "../../fixtures/files.json";

const App = (_) => {
  console.log("The file fixtures are here!", fileFixtures);
  const [content, setContent] = useState('Test Data');
  const updateContent = (content) => {
      setContent(content);
  }

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree data={fileFixtures} updateContent={updateContent}/>
        <FileContent content={content}/>
      </div>
    </div>
  );
};

export default App;
