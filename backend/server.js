require("dotenv").config()
const express = require("express"); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const jwt = require("jsonwebtoken"); 
const bycrypt = require("bcryptjs"); 



const app = express(); 

// Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

// Connecting to MONGODB 
mongoose.connect(process.env.MONGO_URI).then(() => {
    // Listen for requests 
    app.listen(process.env.PORT, () => {
        console.log("Connected to MongoDB and listening on PORT:", process.env.PORT)
    })
}).catch((error) => {
    console.error(error.message); 
})

