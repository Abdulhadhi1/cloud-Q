require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002;

app.get('/', (req, res) =>{
    res.send('Backend Api working');
})

// middleware
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
