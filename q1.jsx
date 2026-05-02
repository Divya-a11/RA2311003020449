import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("API_URL");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      {data.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
}

export default App;