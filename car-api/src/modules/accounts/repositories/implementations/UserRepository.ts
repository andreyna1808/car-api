/* eslint-disable import/no-extraneous-dependencies */
import { Repository, getRepository } from 'typeorm';

import { ICreateUserDTO } from '../../DTOS/CreateUserDTO';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUsersRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      driver_license,
    });
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }
}
