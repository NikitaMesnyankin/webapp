"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.activateUser = exports.createUser = void 0;
const users_1 = require("../models/users");
const utils_1 = require("../utils/utils");
const createUser = async (request, response, next) => {
    try {
        if (await users_1.User.findOne({
            where: {
                $or: [
                    { email: request.body.email }, { login: request.body.login }
                ]
            }
        }) !== null) {
            (0, utils_1.sendJsonData)(response, { message: "User with this email or login already exists" }, 400);
        }
        else {
            const newUser = await users_1.User.create(request.body);
            (0, utils_1.sendJsonData)(response, newUser, 201);
        }
    }
    catch (error) {
        (0, utils_1.sendJsonData)(response, error.message, 500);
    }
};
exports.createUser = createUser;
const activateUser = async (request, response, next) => {
    try {
        const userToActivate = await users_1.User.findOne({
            where: {
                $and: [
                    { activation_link: request.query.link }, { is_activated: false }
                ]
            }
        });
        if (userToActivate === null) {
            (0, utils_1.sendJsonData)(response, { message: "Activation link is invalid or has already been used" }, 400);
        }
        else {
            userToActivate.is_activated = true;
            userToActivate.save();
            (0, utils_1.sendJsonData)(response, { message: "Profile successfully activated!\n You can close this window" }, 200);
        }
    }
    catch (error) {
        (0, utils_1.sendJsonData)(response, error.message, 500);
    }
};
exports.activateUser = activateUser;
const getUserById = async (request, response, next) => {
    try {
        const userToFind = await users_1.User.findByPk(request.params.userId, { raw: true });
        if (userToFind === null) {
            (0, utils_1.sendJsonData)(response, { message: "User not found" }, 404);
        }
        else {
            (0, utils_1.sendJsonData)(response, userToFind, 200);
        }
    }
    catch (error) {
        (0, utils_1.sendJsonData)(response, error.message, 500);
    }
};
exports.getUserById = getUserById;
//# sourceMappingURL=users.js.map