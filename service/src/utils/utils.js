"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendJsonData = void 0;
const sendJsonData = async (response, data, code) => {
    const forbiddenFields = ["password", "login", "email", "activation_link", "is_activated"];
    let newData = Object.assign({}, data);
    for (const forbiddenField of forbiddenFields) {
        delete newData[`${forbiddenField}`];
    }
    response.status(code).setHeader("Content-Type", "application/json").json(newData);
};
exports.sendJsonData = sendJsonData;
//# sourceMappingURL=utils.js.map