import { Schema, model } from 'mongoose';

const addressSchema = new Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  unit: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
});

const productSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  name: { type: String },
  imageUrl: { type: String },
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [productSchema],
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  total: { type: Number, required: true },
  address: { type: addressSchema, required: true },
});

const Order = model('Order', orderSchema);

export default Order;
