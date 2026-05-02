const sendLog = async () => {
  const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_TOKEN",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stack: "frontend",
      level: "info",
      package: "component",
      message: "test",
    }),
  });

  return res.json();
};