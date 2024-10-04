import "./App.css";
import { useEffect, useState } from "react";
import Clock from "./Clock.js";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Current Time</h1>
      <Clock time={time} />
    </div>
  );
}

export default App;
