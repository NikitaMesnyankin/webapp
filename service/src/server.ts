import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users";
import { safetyValidator } from "./middlewares/validator";
const app = express();

app.use(bodyParser.json());
app.use("/", usersRouter);




app.listen(80, () => console.log(`Running on port ${process.env.port}`));
