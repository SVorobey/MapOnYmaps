import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Store/Slices/userSlice';

const handleSignUp = (email, password, username, setEmail, setPassword, setUsername) => {
  const dispatch = useDispatch();
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((item) => {
      updateProfile(auth.currentUser, {
        displayName: username,
      });
      dispatch(setUser({
        id: item.uid,
        email: item.email,
        password: item.password,
        userName: item.displayName,
      }));
    })
    .catch((error) => {
      alert(error);
    });
  setEmail('');
  setPassword('');
  setUsername('');
};

export default handleSignUp;
