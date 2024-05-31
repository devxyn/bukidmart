import axios from 'axios';

export const fetchCartItems = async (userID) => {
  try {
    const response = await axios.get(`https://bukidmart-server.vercel.app/api/cart/${userID}`);
    return response.data.cart;
  } catch (error) {
    console.error(error);
  }
};
