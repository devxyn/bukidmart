import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ message: 'Unauthorized!', success: false });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();
};

export const isAdmin = async (req, res, next) => {
  if (req.user.role === 'admin') {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized!', success: false });
  }
};

export const isUser = async (req, res, next) => {
  if (req.user.role === 'user') {
    next();
  } else {
    return res.status(401).json({ message: 'Unauthorized!', success: false });
  }
};
