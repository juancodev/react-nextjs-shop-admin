import { useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@/api/api.escuelajs';

const useAuth = () => {
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

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };

  return {
    user,
    signIn,
    error,
    setError,
  };
};

export { useAuth };
