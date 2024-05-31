import { useState } from 'react';
import FormInput from './../components/FormInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    stocks: 0,
    category: 'vegetable',
  });

  const navigate = useNavigate();

  const handleProductChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitProduct = async () => {
    try {
      await axios.post('http://localhost:4000/api/products/add', product);
      navigate('/auth/admin/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full px-20 my-40 h-screen'>
      <h2 className='text-4xl font-semibold mb-5'>Add Product</h2>
      <div className='flex flex-col gap-4 mb-4'>
        <FormInput
          id={'name'}
          width={'w-1/2'}
          type={'text'}
          label={'Product name'}
          value={product.name}
          onChange={handleProductChange}
        />
        <FormInput
          id={'description'}
          width={'w-1/2'}
          type={'text'}
          label={'Product description'}
          value={product.description}
          onChange={handleProductChange}
        />
        <FormInput
          id={'imageUrl'}
          width={'w-1/2'}
          type={'text'}
          label={'Product image url'}
          value={product?.imageUrl}
          onChange={handleProductChange}
        />
        <FormInput
          id={'price'}
          width={'w-1/2'}
          type={'number'}
          label={'Product price'}
          hideArrow={'hide-arrows'}
          value={product.price}
          onChange={handleProductChange}
        />
        <FormInput
          id={'stocks'}
          width={'w-1/2'}
          type={'number'}
          label={'Product stocks'}
          hideArrow={'hide-arrows'}
          value={product.stocks}
          onChange={handleProductChange}
        />
        <div className='w-1/2 relative'>
          <label
            htmlFor='category'
            className='absolute text-xs md:text-sm text-placeholder duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] px-3 peer-focus:px-3 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 overflow-hidden text-ellipsis whitespace-nowrap'>
            Select category
          </label>
          <select
            id='category'
            onChange={handleProductChange}
            className='w-full border border-placeholder text-black text-sm rounded-lg focus:ring-secondary focus:border-secoring-secondary block  p-2 pt-4 md:p-3 md:pt-4'>
            <option value='vegetable'>Vegetables</option>
            <option value='fruit'>Fruits</option>
            <option value='rice'>Rice</option>
          </select>
        </div>
      </div>

      <button className='bg-accent text-white rounded-btn py-3 px-6 font-semibold' onClick={handleSubmitProduct}>
        Submit
      </button>
    </div>
  );
};

export default AddProduct;
