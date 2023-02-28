import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@/api/api.escuelajs';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: access_token } = await axios
      .post(endPoints.auth.login, { email, password }, options)
      .catch((error) => {
        setError(error.message);
      });
    if (access_token) {
      const token = access_token.access_token;
      Cookie.set('token', token, { expires: 5 });

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  };

  return {
    user,
    signIn,
    error,
    setError,
    logout,
  };
};
