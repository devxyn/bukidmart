import { createSlice } from '@reduxjs/toolkit';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stocks: number;
  image: string;
  category: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ProductState {
  products: Product[];
  product: Product | null;
  featuredProducts: Product[];
  limit: number;
  page: number;
  total: number;
}

const initialState: ProductState = {
  products: [],
  product: null,
  featuredProducts: [],
  limit: 10,
  page: 1,
  total: 0,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.data;
      state.limit = action.payload.limit;
      state.page = action.payload.page;
      state.total = action.payload.total;
    },
    setFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload.data;
    },
  },
});

export const { setProducts, setFeaturedProducts } = productSlice.actions;
export default productSlice.reducer;
