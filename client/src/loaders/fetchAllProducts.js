import axios from 'axios';

const fetchAllProducts = async () => {
  try {
    const response = await axios.get('https://bukidmart-server.vercel.app/api/products');
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAllProducts;
