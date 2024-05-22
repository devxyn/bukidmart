import axios from 'axios';

const fetchOneProduct = async ({ params }) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/products/${params.id}`);
    console.log(response.data.product);
    return response.data.product;
  } catch (error) {
    console.error(error);
  }
};

export default fetchOneProduct;
