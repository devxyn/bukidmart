import { useLoaderData } from 'react-router-dom';
import FormInput from './FormInput';
import { useState } from 'react';

const EditProduct = () => {
  const product = useLoaderData();

  const [modifiedProduct, setModifiedProduct] = useState({
    id: product?._id,
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || 0,
    stocks: product?.stocks || 0,
    category: product?.category,
  });

  const handleEditProduct = (e) => {
    const { id, value } = e.target;
    setModifiedProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className='w-full px-20 my-40 h-screen flex flex-col gap-5'>
      <h2 className='text-4xl font-semibold'>Edit Product</h2>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <FormInput
            id={'name'}
            value={modifiedProduct?.name}
            width={'w-1/2'}
            type={'text'}
            label={'Product name'}
            onChange={handleEditProduct}
          />
          <FormInput
            id={'description'}
            value={modifiedProduct?.description}
            width={'w-1/2'}
            type={'text'}
            label={'Product description'}
            onChange={handleEditProduct}
          />
        </div>

        <FormInput
          id={'price'}
          value={modifiedProduct?.price}
          width={'w-1/2'}
          type={'number'}
          label={'Product price'}
          hideArrow={'hide-arrows'}
          onChange={handleEditProduct}
        />
        <FormInput
          id={'stocks'}
          value={modifiedProduct?.stocks}
          width={'w-1/2'}
          type={'number'}
          label={'Product stocks'}
          hideArrow={'hide-arrows'}
          onChange={handleEditProduct}
        />

        <div className='w-1/2 relative'>
          <label
            htmlFor='category'
            className='absolute text-xs md:text-sm text-placeholder duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] px-3 peer-focus:px-3 peer-focus:text-sm peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 overflow-hidden text-ellipsis whitespace-nowrap'>
            Select category
          </label>
          <select
            onChange={handleEditProduct}
            defaultValue={modifiedProduct?.category}
            id='category'
            className='w-full border border-placeholder text-black text-sm rounded-lg focus:ring-secondary focus:border-secoring-secondary block  p-2 pt-4 md:p-3 md:pt-4'>
            <option value='vegetable'>Vegetables</option>
            <option value='fruit'>Fruits</option>
            <option value='rice'>Rice</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
