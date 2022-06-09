import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { Errors } from '../../../errors/Errors';
import { ICreateUserDTO } from '../DTOS/CreateUserDTO';
import { IUserRepository } from '../repositories/IUsersRepository';

@injectable()
export class CreateUserCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}
  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExits = await this.userRepository.findByEmail(email);
    if (userAlreadyExits) {
      throw new Errors('Email already exits');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      password: passwordHash,
      email,
      driver_license,
    });
  }
}
