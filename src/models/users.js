import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    articlesAmount: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export const User = model('User', userSchema);
