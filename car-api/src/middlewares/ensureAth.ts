import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { Errors } from '../errors/Errors';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';
import { SECRET_KEY } from '../utils/secretKey';

interface IPayload {
  sub: string;
}

export async function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Errors('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, SECRET_KEY) as IPayload;
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Errors('Users does not exist', 401);
    }

    req.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new Errors('Invalid Token', 401);
  }
}
