import app from "./infra/http/app";

const port = process.env.PORT || 3000;

app.get("/", (_, res) => res.send("Hello gift.io!"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
