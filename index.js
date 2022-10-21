const express = require("express");
const morgan = require('morgan');
const routes = require("./routes/routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(morgan('combined'))
app.use("/api", routes);

// start server
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})