import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController.js';
import { celebrate } from 'celebrate';
import { userIdParamSchema } from '../validations/usersValidation.js';

const router = Router();
router.get('/users', getAllUsers);
router.get('/users/:userId', celebrate(userIdParamSchema), getUserById);

export default router;
