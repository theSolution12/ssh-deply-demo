import e from "express";

const app = e();
const PORT = env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    msg: "Hello from server",
  });
});

app.listen(PORT, () => {
  console.log(`http//localhost:${PORT}`);
});

// demo change
