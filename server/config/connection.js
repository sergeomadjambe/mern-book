const mongoose = require("mongoose");
const uri = require('./key').MONGO_URI;
console.log(uri);

mongoose
  .connect(process.env.MONGODB_URI || uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch(err => {
    console.error(err);
  });

module.exports = mongoose.connection;