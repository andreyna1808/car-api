import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { Errors } from '../../../errors/Errors';
import { SECRET_KEY } from '../../../utils/secretKey';
import { IUserRepository } from '../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}
interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthUserCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    const passwordMatch = await compare(password, user.password);

    if (!user || !passwordMatch) {
      throw new Errors('Email or password incorrect!');
    }

    const token = sign({}, SECRET_KEY, {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}
