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

connection(`${process.env.MONGO_URI}`)
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
app.listen(`${process.env.BACKEND_PORT}`, () => {
  console.log("server is running on port 8000");
});
