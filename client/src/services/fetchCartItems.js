import axios from 'axios';

export const fetchCartItems = async (userID) => {
  try {
    const response = await axios.get(`https://bukidmart.onrender.com/api/cart/${userID}`);
    return response.data.cart;
  } catch (error) {
    console.error(error);
  }
};
