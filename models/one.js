var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var Myschemas = new Schema({
    data: {
        "title":
            String,

        "body":
            String
    }
}, { timestamps: true })

var Firstdata = mongoose.model("practises", Myschemas)

module.exports = Firstdata;