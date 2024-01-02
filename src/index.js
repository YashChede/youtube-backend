// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// not available in actual document but we are
// using through an experimental feature in package.json
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error !!!", err);
  });

/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("app not getting start", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error in DB connection", error);
    throw error;
  }
})();
*/
