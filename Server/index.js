const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb+srv://abinayak21it:abinayak%40175@cluster0.idcymt2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> {
    console.log("db connected");
})
.catch((err) => {
    console.error(err);
});

const DBSchema = new mongoose.Schema({
    name :{type: String, required: true},
    email:{type: String , unique: true},
    phone: {type: String}
});

const DBCollection = mongoose.model("Project0",DBSchema);

app.use(express.json());
app.use(cors());

app.post("/contactform",async(req,res) =>{
    try{
        const user = new DBCollection(req.body);
        const result = await user.save();
        const dataSending= result.toObject();
        res.send(dataSending);
    }
    catch(e)
    {
        console.error(e);
        res.status(500).send('Something went wrong');
    }
});

app.listen(5000, ()=>{
    console.log("server hosted on 5000");
});