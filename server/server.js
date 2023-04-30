import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

/** middlewares */
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

const HTTP_PORT = process.env.PORT;
const onHttpStart = () =>
  console.log(`HTTP server is listening on port ${HTTP_PORT} 🚀🚀🚀`);

/** HTTP GET Request */
app.get("/", (req, res) => {
  res.status(201).json("Home GET Request");
});

/** api routes */
app.use("/api", router);

/** start server only when we have valid connection */
connect()
  .then(() => {
    try {
      app.listen(HTTP_PORT, onHttpStart);
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
