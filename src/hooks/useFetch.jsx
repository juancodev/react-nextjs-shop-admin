import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoints) => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(endpoints);
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
