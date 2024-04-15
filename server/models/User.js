import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  address: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
  role: { type: String, enum: ['customer', 'seller'], default: 'customer' },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const User = model('User', userSchema);

export default User;
