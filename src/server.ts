import app from "./infra/http/app";

const port = process.env.PORT;

console.log("test: ", test);

app.get("/", (req, res) => res.send("Hello gift.io!"));

app.listen(port || 3000, () => `🚀 Server running on port ${port}`);
