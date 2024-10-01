import "./App.css";
import { useState, useEffect } from "react";
import Clock from "./Clock.js";

function App() {
  useEffect(() => {
    document.title = "Clock App";
  }, []);

  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div className="App">
      <h1>Current Time</h1>
      <Clock time={time} />
    </div>
  );
}

export default App;
