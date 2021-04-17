import React from "react";
import "./style.scss";
import useApp from "./props";

/**
 * App
 */
const App = () => {
  const { message } = useApp();

  return (
    <div>
      <p>Dentist App Front</p>
    </div>
  );
};

export default App;
