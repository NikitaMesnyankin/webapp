"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const users_1 = require("../methods/users");
const usersRouter = express_1.default.Router();
usersRouter.post("/users", users_1.createUser);
usersRouter.post("/activate", users_1.activateUser);
usersRouter.get("/users/:userId", users_1.getUserById);
module.exports = usersRouter;
//# sourceMappingURL=users.js.map