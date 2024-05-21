import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'products' },
      quantity: { type: Number },
    },
  ],
  isAdmin: { type: Boolean, default: false },
});

const User = model('User', userSchema);

export default User;
