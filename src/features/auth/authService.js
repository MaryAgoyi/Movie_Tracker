import { axiosPrivate } from "../../common/apis/tvShowApi";


const ACC_ID = `/account?api_key=`;
const REQUEST_TOKEN = `/authentication/token/new?api_key=`;
const VALIDATE_LOGIN = `/authentication/token/validate_with_login?api_key=`;
const REQUEST_SESSION = `/authentication/session/new?api_key=`;

export const login = async (user) => {
  const getRequestToken = await axiosPrivate.get( REQUEST_TOKEN + `${user.apikey}`  );
   
  return getRequestToken.data;
};

export const validate = async (user, requestToken) => {
  const validateToken = await axiosPrivate.post(
    VALIDATE_LOGIN + `${user.apikey}`,
    JSON.stringify({
      username: user.username,
      password: user.password,
      request_token: requestToken,
    })
  );

  return validateToken.data;
};

export const requestSession = async (user, requestToken) => {
  const sessionId = await axiosPrivate.post(
    REQUEST_SESSION + `${user.apikey}`,
    JSON.stringify({
      request_token: requestToken,
    })
  );



  return sessionId.data;
};

export const requestAccountId = async (user, sessionId) => {
  const accountId = await axiosPrivate.get(
    ACC_ID + `${user.apikey}&session_id=${sessionId}`
  );

  

  return accountId.data;
};

const authService = { login, validate, requestSession, requestAccountId };
export default authService;
