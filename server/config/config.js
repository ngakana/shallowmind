const dotenv = require("dotenv").config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGODB_URI,
    apikey: process.env.API_KEY,
}

module.exports = config;