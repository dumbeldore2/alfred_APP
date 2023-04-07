import express from "express";
import bodyParser from "body-parser";
import mongoose, { Error } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import usersRoutes from "./routes/user.js";   

/* some confugigurations*/
dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors);

/*routes*/  
app.use("/users",usersRoutes);

/*mongoos setup*/
const PORT = process.env.PORT || 9000;
console.log(process.env.PORT);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect `))