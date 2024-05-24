import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  products: [{ product: { type: Schema.Types.ObjectId, ref: 'products' }, quantity: { type: Number } }],
  total: { type: Number },
});

const Order = model('Order', orderSchema);

export default Order;
