export const authLogin = (data) => {
  return {
    type: "AUTH_LOGIN",
    payload: data,
  };
};
