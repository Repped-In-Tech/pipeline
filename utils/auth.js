import firebase from 'firebase/app';
import { updateUserInfo } from './data/userInfo';

const getUserToken = async () => firebase.auth().currentUser.getIdToken(true);

const signInUser = async () => {
  const provider = new firebase.auth.GithubAuthProvider();
  provider.addScope('repo');
  provider.addScope('user');
  provider.addScope('public_repo');
  provider.addScope('repo_deployment');
  provider.addScope('read:gpg_key');
  provider.addScope('read:public_key');
  provider.addScope('read:org');
  provider.addScope('repo:status');
  provider.addScope('read:repo_hook');

  const {
    credential: { accessToken: token },
    user,
    additionalUserInfo: { username },
  } = await firebase.auth().signInWithPopup(provider);

  const apiToken = await getUserToken();

  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  updateUserInfo(user.uid, apiToken, { token, username });
};

const signOutUser = () => firebase.auth().signOut();

export { signInUser, signOutUser, getUserToken };
