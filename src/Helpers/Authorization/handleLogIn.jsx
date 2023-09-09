import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// eslint-disable-next-line max-len
const handleLogIn = (setShowBlock, setIsAuthorized) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth)
    .then(({ user }) => {
      const { accessToken } = user;
      localStorage.setItem('Token', accessToken);
      setShowBlock('');
      setIsAuthorized(true);
    })
    .catch((error) => {
      console.log(error);
      setIsAuthorized(false);
    });
};

export default handleLogIn;
