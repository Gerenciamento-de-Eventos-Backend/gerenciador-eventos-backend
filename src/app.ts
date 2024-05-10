import express from "express";
import router from "./router/user"

export const app = express();
const port = 8000;

app.use(express.json());

app.use(router);

app.listen(port, () =>
    console.log(
        `Server running on http://localhost:${port}`
));