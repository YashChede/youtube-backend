// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

// not available in actual document but we are
// using through an experimental feature in package.json
dotenv.config({
  path: "./env",
});

connectDB();

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
