import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) res.status(401).json({ message: 'Invalid credentials!', success: false });

    const isMatch = await user.matchPassword(password);

    if (!isMatch) res.status(401).json({ message: 'Invalid credentials!', success: false });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.status(200).json({ message: 'Logged in successfully!', token, data: user, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const signUp = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: 'Email is already registered!', success: false });

    const user = await User.create({ firstName, lastName, email, password });

    res.status(201).json({ message: 'Account registered successfully!', data: user, success: true });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!', error: error.message, success: false });
  }
};

export const me = async (req, res) => {
  const { user } = req;

  return res.status(200).json({ message: 'User fetched successfully!', data: user, success: true });
};
