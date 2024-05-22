import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  imageUrl: { type: String, required: true, default: 'image.png' },
  category: {
    type: String,
    enum: ['rice', 'vegetable', 'fruit'],
    required: true,
  },
  isFeatured: { type: Boolean, default: false },
});

const Product = model('Product', productSchema);

export default Product;
