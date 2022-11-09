const mongoose = require("mongoose");

mongoose.connect("mongodb://dhanu:lakshmi@ac-wiybrru-shard-00-00.oycveuz.mongodb.net:27017,ac-wiybrru-shard-00-01.oycveuz.mongodb.net:27017,ac-wiybrru-shard-00-02.oycveuz.mongodb.net:27017/?ssl=true&replicaSet=atlas-i9nstt-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
