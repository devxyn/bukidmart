import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stocks: { type: Number, required: true, default: 0 },
    image: { type: String, required: true, default: 'image.png' },
    category: {
      type: String,
      enum: ['rice', 'vegetable', 'fruit'],
      required: true,
    },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Product = model('Product', productSchema);

export default Product;
