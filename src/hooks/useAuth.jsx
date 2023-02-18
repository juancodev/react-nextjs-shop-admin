import { useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@/api/api.escuelajs';

const useAuth = () => {
  const [user, setUser] = useState(null);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    const { data: access_token } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    );
    console.log(access_token);
  };

  return {
    user,
    signIn,
  };
};

export { useAuth };
