import express from 'express';
import {router as photoRouter} from "./routes/photo.routes.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use('/api', photoRouter);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})