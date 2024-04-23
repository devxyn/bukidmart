import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  contactNumber: { type: String, default: '' },
  address: {
    addressLine: { type: String, default: '' },
    city: { type: String, default: '' },
    state: { type: String, default: '' },
    zipCode: { type: String, default: '' },
  },
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number },
    },
  ],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  isAdmin: { type: Boolean, default: false },
});

const User = model('User', userSchema);

export default User;
