const mongoose = require("mongoose");
const app = require("./app");
const dotenv=require('dotenv')


dotenv.config()
let server;
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to MongoDB");
  server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.port}`);
  });
});


const exitHandler = () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// server()

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (server) {
    server.close();
  }
});
