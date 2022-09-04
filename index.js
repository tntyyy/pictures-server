const express = require('express');
const cors = require('cors');

const photoRouter = require("./routes/photo.routes.js");
const collectionRouter = require("./routes/collection.routes.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', collectionRouter);
app.use('/api', photoRouter);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})