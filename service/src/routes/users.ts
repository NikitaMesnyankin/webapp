import express from "express";
import { activateUser, createUser, getUserById } from "../methods/users";

const usersRouter = express.Router();

usersRouter.post("/users", createUser);
usersRouter.post("/activate", activateUser);
usersRouter.get("/users/:userId", getUserById);

export = usersRouter;