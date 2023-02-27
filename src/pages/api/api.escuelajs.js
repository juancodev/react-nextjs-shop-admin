const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refreshToken: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  products: {
    allProducts: `${API}/api/${VERSION}/products/`,
    getProducts: (limit, offset) =>
      `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    postProducts: `${API}/api/${VERSION}/products`,
    getProduct: (id) => `${API}/api/${VERSION}/product/${id}`,
    putProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getUsers: `${API}/api/${VERSION}/users`,
    postUsers: `${API}/api/${VERSION}/users`,
    postAvailableUser: `${API}/api/${VERSION}/users/is-available`,
    getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    putUser: (id) => `${API}/api/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
  },
  categories: {
    getCategories: `${API}/api/${VERSION}/categories`,
    postCategories: `${API}/api/${VERSION}/categories`,
    getCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getCategoryProducts: (id) =>
      `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    postFiles: `${API}/api/${VERSION}/files/upload`,
    getFiles: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;
