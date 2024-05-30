import axios from 'axios';

export const fetchCartItems = async (userID) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/cart/${userID}`);
    return response.data.cart;
  } catch (error) {
    console.error(error);
  }
};
