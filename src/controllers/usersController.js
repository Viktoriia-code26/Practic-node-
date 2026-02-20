import { User } from '../models/users.js';
import { Article } from '../models/articles.js';
import createHttpError from 'http-errors';
import mongoose from 'mongoose';

// Контролер для отримання всіх користувачів
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
// Контролер для отримання користувача за ID
export const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    throw createHttpError(400, 'Invalid user ID');
  }

  const user = await User.findById(userId);
  if (!user) {
    throw createHttpError(404, 'User not found');
  }

  const articles = await Article.find({ ownerId: userId })
    .sort({
      createdAt: -1,
    })
    .populate('ownerId', 'name avatarUrl'); // Додайте populate для отримання даних власника статті
  res.status(200).json({ user, articles });
};
