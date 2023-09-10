import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../Store/Slices/userSlice';

// eslint-disable-next-line max-len
const handleLogIn = (setShowBlock, setIsAuthorized, email, password, dispatch) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const { accessToken } = user;
      localStorage.setItem('Token', accessToken);
      setShowBlock('');
      dispatch(setUser({
        email: user.email,
        token: user.accessToken,
        userName: user.displayName,
      }));
      setIsAuthorized(true);
    })
    .catch((error) => {
      console.log(error);
      setIsAuthorized(false);
    });
};

export default handleLogIn;
