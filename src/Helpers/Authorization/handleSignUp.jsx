import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import WelcomeBlock from '../../Components/Authorization/WelcomeBlock';

function handleSignUp(email, password, username, setEmail, setPassword, setUsername) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((item) => {
      updateProfile(auth.currentUser, {
        displayName: username,
      });
      const { user } = item;
      console.log(user);
    })
    .catch((error) => {
      alert(error);
    });
  setEmail('');
  setPassword('');
  setUsername('');
  return WelcomeBlock;
}

export default handleSignUp;
