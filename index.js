import express, {request} from "express";

import cors from "cors";
import bodyParser from "body-parser";
import connection  from "./db.js";
import route from "./routes/route.js";

const app = express();

//Middleware functions
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);

connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Backend Server is running on ${PORT}`));