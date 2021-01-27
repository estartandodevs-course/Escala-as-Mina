import firebase from "firebase/app";
import "firebase/auth";

export async function login(email, password) {
  try {
    await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION);
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    return { success: true, data: user };
  } catch (error) {
    const { code, message } = error;
    return { success: false, data: { code, message } };
  }
}

export async function getUser() {
  try {
    const user = await firebase.auth().currentUser;
    return user;
  } catch (error) {
    const { code, message } = error;
    return { success: false, data: { code, message } };
  }
}

export function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true });
    } else {
      callback({ loggedIn: false });
    }
  });
}
