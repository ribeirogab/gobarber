import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import uploadConfig from '../configs/upload';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import User from '../models/User';

const upload = multer(uploadConfig);

const usersRouter = Router();

usersRouter.patch(
  '/avatar',
  upload.single('avatar'),
  ensureAuthenticated,
  async (req, res) => {
    const user = await new UpdateUserAvatarService().execute({
      user_id: req.user.id,
      avatar_filename: req.file.filename,
    });

    delete user.password;

    return res.json(user);
  },
);

usersRouter.get('/', async (req, res) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return res.json(users);
});

usersRouter.post('/', async (req, res) => {
  const { name, email, password } = req.body;

  const appointment = await new CreateUserService().execute({
    name,
    email,
    password,
  });

  delete appointment.password;

  return res.json(appointment);
});

export default usersRouter;
