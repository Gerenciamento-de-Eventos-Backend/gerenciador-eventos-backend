import express from "express";

export const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () =>
    console.info(
        `Server running on http://localhost:${port}`
));