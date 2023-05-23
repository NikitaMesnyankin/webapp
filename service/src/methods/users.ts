import { User } from "../models/users";
import { sendJsonData } from "../utils/utils";

export const createUser = async (request: any, response: any, next: any) => {
  try {
    if (await User.findOne({
      where: {
        $or: [
          { email: request.body.email }, { login: request.body.login }
        ]
      }
    }) !== null) {
      sendJsonData(response, { message: "User with this email or login already exists" }, 400);
    } else {
      const newUser = await User.create(request.body);
      sendJsonData(response, newUser, 201);
    }
  } catch (error: any) {
    sendJsonData(response, error.message, 500);
  }
}

export const activateUser = async (request: any, response: any, next: any) => {
  try {
    const userToActivate: any = await User.findOne({
      where: {
        $and: [
          { activation_link: request.query.link }, { is_activated: false }
        ]
      }
    }); 
    if (userToActivate === null) {
      sendJsonData(response, { message: "Activation link is invalid or has already been used" }, 400);
    } else {
      userToActivate.is_activated = true;
      userToActivate.save();
      sendJsonData(response, { message: "Profile successfully activated!\n You can close this window" }, 200);
    }
  } catch (error: any) {
    sendJsonData(response, error.message, 500);
  }
}

export const getUserById = async (request: any, response: any, next: any) => {
  try {
    const userToFind = await User.findByPk(request.params.userId, { raw: true });
    if (userToFind === null) {
      sendJsonData(response, { message: "User not found"}, 404);
    } else {
      sendJsonData(response, userToFind, 200);
    }
  } catch (error: any) {
    sendJsonData(response, error.message, 500);
  }
}