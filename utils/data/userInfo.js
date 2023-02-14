import axios from 'axios';
import { clientCredentials } from '../client';

const getUserInfo = async (uid, token) => {
  const response = await axios.get(
    `${clientCredentials.databaseURL}/userInfo/${uid}.json?auth=${token}`,
  );
  return response.data;
};

const updateUserInfo = async (uid, token, obj) => {
  await axios.patch(
    `${clientCredentials.databaseURL}/userInfo/${uid}.json?auth=${token}`,
    obj,
  );
};

const createUserInfo = () => {};

export { getUserInfo, createUserInfo, updateUserInfo };
