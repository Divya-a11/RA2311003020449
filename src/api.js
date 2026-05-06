export const sendLog = async (message) => {
  const res = await fetch("http://20.207.122.201/evaluation-service/logs", {
    method: "POST",
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkajI5MTNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMDk5MCwiaWF0IjoxNzc3NzAwMDkwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZjRiZWVkZjAtNTYzZC00ZmI2LTk5ZWYtNWZiYzlkM2Q3ZDc4IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGl2eWFzaHJlZSBqIiwic3ViIjoiYjhhYzRlNGYtMzU3NC00MzE2LWFjODktYjc0NmFkZjZmN2U3In0sImVtYWlsIjoiZGoyOTEzQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoiZGl2eWFzaHJlZSBqIiwicm9sbE5vIjoicmEyMzExMDAzMDIwNDQ5IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiYjhhYzRlNGYtMzU3NC00MzE2LWFjODktYjc0NmFkZjZmN2U3IiwiY2xpZW50U2VjcmV0Ijoia2Zjemp3U0tzY1JKZkZjQiJ9.XNyXI5i67dt99i74WNiUSVvyWDno9ELU6DFIspeusBM",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      stack: "frontend",
      level: "info",
      package: "component",
      message: message,
    }),
  });

  return res.json();
};
