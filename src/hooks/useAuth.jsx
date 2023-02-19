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
      Cookie.set('token', access_token.access_token, { expires: 5 });
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
