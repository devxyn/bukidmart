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

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products' },
      name: { type: String },
      imageUrl: { type: String },
      quantity: { type: Number },
    },
  ],
  status: { type: String, default: 'Pending' },
  total: { type: Number, required: true },
  address: { type: addressSchema, required: true },
});

const Order = model('Order', orderSchema);

export default Order;
