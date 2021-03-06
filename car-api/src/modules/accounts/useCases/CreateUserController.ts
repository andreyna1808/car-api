import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserCase } from './CreateUserCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, email, driver_license } = request.body;
    const createUserCase = container.resolve(CreateUserCase);

    await createUserCase.execute({
      name,
      password,
      email,
      driver_license,
    });

    return response.status(201).send({ message: 'Usuário criado com sucesso' });
  }
}
