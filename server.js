const express = require("express");
const app = express();
app.use(express.json());
// dotenv setup ----------------------------------
require("dotenv").config({ path: "./config/.env" });
app.use("/", require("./routes/userRouter"));
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log("connected on port", process.env.PORT);
});
