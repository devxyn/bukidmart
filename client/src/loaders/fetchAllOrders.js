import axios from 'axios';

const fetchAllProducts = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/orders/');
    return response.data.orders;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAllProducts;
