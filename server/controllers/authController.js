import User from '../models/User.js';
import bcrpyt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) res.status(401).json({ message: 'Invalid credentials!' });

    const isPasswordValid = await bcrpyt.compare(password, user.password);

    if (!isPasswordValid) res.status(401).json({ message: 'Invalid credentials!' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Logged in successfully!', token, userID: user._id, isAdmin: user.isAdmin });
  } catch (error) {}
};

export const signUpController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) res.status(400).json({ message: 'Email is already registered!' });

    const hashedPassword = await bcrpyt.hash(password, 10);

    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'Account registered successfully!', data: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
