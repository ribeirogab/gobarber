import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import AppError from '../errors/AppError';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

export default class CreateSessionService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });
    if (!user) throw new AppError('Wrong email or password.', 401);

    const matchingPasswords = await compare(password, user.password);
    if (!matchingPasswords) throw new AppError('Wrong email or password.', 401);

    try {
      const token = sign({}, process.env.SECRET as string, {
        subject: user.id,
        expiresIn: '1d',
      });
      return { user, token };
    } catch {
      throw new AppError('Error generating token.', 500);
    }
  }
}
