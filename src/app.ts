import express from "express";
import { router } from "./router/user";
import { productionsRouter } from "./router/productions";

export const app = express();
const port = 8000;

app.use(express.json());

app.use(router);
app.use(productionsRouter)

app.listen(port, () =>
    console.log(
        `Server running on http://localhost:${port}`
));