"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/", users_1.default);
app.listen(80, () => console.log(`Running on port ${process.env.port}`));
//# sourceMappingURL=server.js.map