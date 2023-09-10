import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from '../../Store/Slices/userSlice';

const handleSignUp = (email, password, username, dispatch) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((item) => {
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        dispatch(setUser({
          email: item.user.email,
          token: item.user.accessToken,
        }));
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export default handleSignUp;
