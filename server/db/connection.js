const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb://localhost:27017")
        .then(db => {
            console.log("Database Connected");
            return db;
        }).catch(err => {
            console.log("Connection Error");
        })

module.exports = conn;