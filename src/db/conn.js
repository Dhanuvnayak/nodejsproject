const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhanu:lakshmi@cluster0.oycveuz.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
