import axios from 'axios';
import endPoints from '@/api/api.escuelajs';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    endPoints.products.postProducts,
    body,
    config
  );
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.deleteProduct(id));
  return response.data;
};

const updateProduct = async (id, body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(
    endPoints.products.putProduct(id),
    body,
    config
  );
  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
