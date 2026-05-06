const sendLog = async () => {
  const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_FULL_TOKEN_HERE",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stack: "frontend",
      level: "info",
      package: "component",
      message: "test log working",
    }),
  });

  return res.json();
};
