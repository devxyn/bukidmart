import axios from 'axios';

const fetchOneProduct = async ({ params }) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/products/${params.id}`);
    return response.data.product;
  } catch (error) {
    console.error(error);
  }
};

export default fetchOneProduct;
