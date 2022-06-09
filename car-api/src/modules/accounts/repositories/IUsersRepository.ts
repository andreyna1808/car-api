import { ICreateUserDTO } from '../DTOS/CreateUserDTO';
import { User } from '../entities/User';

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}
