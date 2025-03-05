require("dotenv").config()
const express = require("express"); 
const cors = require("cors"); 
const bodyParser = require("body-parser"); 
const jwt = require("jsonwebtoken"); 
const bycrypt = require("bcryptjs"); 
const sequelize = require("./config/db"); 



const app = express(); 

// Middleware 
app.use(cors()); 
app.use(bodyParser.json()); 

// Test the database connection 
sequelize.authenticate().then(() => {
    console.log("DATABASE CONNECTED")
}).catch(error => {
    console.error("Could not connect to PostgreSQL database:", error)
});

// Routes 
app.get("/", (req, res) => {
    res.send("The server is running"); 
}); 

// Start the server 
const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
}); 