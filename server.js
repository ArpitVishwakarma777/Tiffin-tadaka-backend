const connection = require("./connection/connection");
const cors = require("cors");
const {
  router,
  menuDataRouter,
  contactRouter,
  signUpRouter,
} = require("./routes/routes");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
const dbUrl = "mongodb://127.0.0.1:27017/tiffin-tadaka";
connection(dbUrl)
  .then(() => {
    console.log("Connection is stablisted with DB ");
  })
  .catch((e) => {
    console.log("error on DB connection: ", e);
  });
app.use("/api/home", router);
app.use("/api/menu", menuDataRouter);
app.use("/api", signUpRouter);
app.use("/api/contact", contactRouter);
app.listen("8000", () => {
  console.log("server is running on port 8000");
});
