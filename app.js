import express from "express";
import pagesRouter from "./routers/pagesRouter.js";

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.use(pagesRouter);

app.listen(PORT, () => console.log('Server is running on port', PORT));


