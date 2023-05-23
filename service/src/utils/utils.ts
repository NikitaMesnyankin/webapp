export const sendJsonData = async (response: any, data: any, code: number) => {
  const forbiddenFields = ["password", "login", "email", "activation_link", "is_activated"];
  let newData = {...data};
  for (const forbiddenField of forbiddenFields) {
      delete newData[`${forbiddenField}`];
  }
  response.status(code).setHeader("Content-Type", "application/json").json(newData);
};