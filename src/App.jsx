import React from "react";
import Stylesheet from "./Stylesheet/Stylesheet";
import InlineStyle from "./Inline/Inline";
import Modules from "./Modules/Modules";
const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Stylesheet title={"This is title"} content={"This is Content"} />
      <InlineStyle />
      <Modules />
    </div>
  );
};

export default App;
