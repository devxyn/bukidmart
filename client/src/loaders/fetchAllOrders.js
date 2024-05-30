import axios from 'axios';

const fetchAllOrders = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/orders/');
    console.log(response.data.orders);
    return response.data.orders;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAllOrders;
