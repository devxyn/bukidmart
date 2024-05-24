import axios from 'axios';

const fetchOneProduct = async ({ params }) => {
  try {
    const response = await axios.get(`https://bukidmart.onrender.com/api/products/${params.id}`);
    return response.data.product;
  } catch (error) {
    console.error(error);
  }
};

export default fetchOneProduct;
