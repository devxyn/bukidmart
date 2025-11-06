import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import vine from '@vinejs/vine';
import { validatorService } from '../services/validatorService.js';

const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string(),
});

const signUpSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(8),
  firstName: vine.string().minLength(2),
  lastName: vine.string().minLength(2),
});

export const validateLogin = async (req, res, next) => {
  const validationResult = await validatorService(req.body, loginSchema);

  if (!validationResult.success) {
    return res.status(400).json({ message: validationResult.message, success: false });
  }

  req.body = validationResult.data;
  next();
};

export const validateSignUp = async (req, res, next) => {
  const validationResult = await validatorService(req.body, signUpSchema);

  if (!validationResult.success) {
    return res.status(400).json({ message: validationResult.message, success: false });
  }

  req.body = validationResult.data;
  next();
};

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
