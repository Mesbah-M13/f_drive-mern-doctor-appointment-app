const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('MongoDB database connection is successful');
})

connection.on('error',(error)=>{
    console.log('Error connection',error);
})

module.exports = mongoose;