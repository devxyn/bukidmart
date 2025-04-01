import mongoose from 'mongoose';
import brcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, required: true, min: 1 },
});

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    cart: [cartItemSchema],
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await brcrypt.genSalt(10);
  this.password = await brcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await brcrypt.compare(enteredPassword, this.password);
};

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

const User = model('User', userSchema);

export default User;
