import { model, Schema } from 'mongoose';

const articleSchema = new Schema(
  {
    title: String,
    text: String,
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const Article = model('Article', articleSchema);
