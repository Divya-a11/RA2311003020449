import React, { useState } from "react";
import { sendLog } from "./api";
import { maxSum } from "./maxSum";

function App() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setData(result);

      await sendLog("Fetched users");
    } catch (err) {
      console.log(err);
    }
  };

  const handleMaxSum = () => {
    const arr = [1, -2, 3, 4, -1, 2];
    const result = maxSum(arr);
    alert("Max Sum: " + result);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Assignment Project</h1>

      <button onClick={fetchData}>Fetch Users</button>

      {data.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}

      <hr />

      <input
        type="text"
        placeholder="Enter log message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={() => sendLog(message)}>Send Log</button>

      <hr />

      <button onClick={handleMaxSum}>Run Max Sum</button>
    </div>
  );
}

export default App;
