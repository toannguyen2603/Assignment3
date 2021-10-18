require('dotenv').config();
const mongoose = require('mongoose');


const connect = mongoose.connect(process.env.MONGOOSE_URL,{
        useNewUrlParser: true
    }).then(() => {
        console.log('Connection successful');
    }).catch(
        () => {
        console.log(error);
    })

module.exports = connect;
