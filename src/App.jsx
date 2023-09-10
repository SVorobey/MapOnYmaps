import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch } from 'react-redux';
import YandexMap from './Components/Map/index';
import { setUser } from './Store/Slices/userSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localAccessToken = localStorage.getItem('Token');
    if (localAccessToken) {
      const auth = getAuth();
      onAuthStateChanged(auth, (item) => {
        if (item && item.accessToken) {
          dispatch(setUser({
            email: item.email,
            userName: item.displayName,
            token: localAccessToken,
          }));
        }
      });
    }
  }, []);
  return (
    <div>
      <YandexMap />
    </div>
  );
}

export default App;
