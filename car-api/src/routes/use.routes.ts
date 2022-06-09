import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuth } from '../middlewares/ensureAth';
import { UpdateAvatarController } from '../modules/accounts/updateAvatar/updateAvatarController';
import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';

export const usersRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateAvatarController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.patch(
  '/avatar',
  ensureAuth,
  uploadAvatar.single('avatar'),
  updateAvatarController.handle,
);
