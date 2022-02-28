import app from "./app";

// Settings
app.set("port", process.env.PORT || 4000);

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(app.get("port"));
console.log("Server on port", app.get("port"));
