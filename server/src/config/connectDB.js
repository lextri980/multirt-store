const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.DB_CONNECT_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected!");
  } catch (error) {
    console.log(error);
    console.log("Fail to connect!");
  }
}

module.exports = { connect };
