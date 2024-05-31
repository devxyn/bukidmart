import axios from 'axios';

const fetchOrder = async ({ params }) => {
  try {
    const response = await axios.get(`https://bukidmart-server.vercel.app/api/orders/${params.id}`);
    return response.data.order;
  } catch (error) {
    console.error(error);
  }
};

export default fetchOrder;
