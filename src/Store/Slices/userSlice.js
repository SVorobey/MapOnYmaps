import { createSlice } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const initialState = {
  email: null,
  userName: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        userName: action.payload.userName,
        email: action.payload.email,
        token: action.payload.token,
      };
    },
    // eslint-disable-next-line consistent-return
    setLogin: async (state, action) => {
      const auth = getAuth();
      try {
        // eslint-disable-next-line max-len
        const userCredentials = await signInWithEmailAndPassword(auth, action.payload.email, action.payload.password);
        const { displayName } = userCredentials.user;
        const { accessToken } = userCredentials.user;
        localStorage.setItem('Token', accessToken);
        return {
          ...state,
          userName: displayName,
          email: action.payload.email,
          token: accessToken,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
});
export const userData = (state) => state.user.userName;
export const { setUser, setLogin } = userSlice.actions;
export default userSlice.reducer;
