const {Sequelize} = require('sequelize'); 

// Connecting to PostgreSQL database
const sequelize = new Sequelize(process.env.DB_URI, {
    dialect: "postgres", 
    logging: false,
}); 

// Test connection 
async function testConnection() {
    try {
        await sequelize.authenticate(); 
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
}

testConnection(); 

module.exports = sequelize; 