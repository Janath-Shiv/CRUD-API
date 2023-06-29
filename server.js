const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 1234;
const portmade = app.listen(port);
if(portmade){
    console.log(`App running at port ${port}`);
}
const DBconnect = mongoose.connect(process.env.CONNECTION_STRING);
if(DBconnect) {
    console.log(`Database connected`);
}
app.use(express.json());
app.use("/api/user",require("./routes/routea"));
