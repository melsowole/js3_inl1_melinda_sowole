import "./App.css";
import { useState } from "react";

function App() {
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

function Clock(props) {
  const { time } = props;

  return (
    <p>
      {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
    </p>
  );
}

export default App;
