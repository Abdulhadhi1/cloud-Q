const mongoose = require("mongoose");

const DB = "mongodb+srv://abdul:abdul123@cluster0.urbikzn.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})





