//import express
import express from "express";

//import router
import Router from "./routes/routes.js";

//init express
const app = express();

//use Router
app.use(Router);

//set port
app.listen(3000, ()=> console.log('Server Running at http://localhost:3000'));