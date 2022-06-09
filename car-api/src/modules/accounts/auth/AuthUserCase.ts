import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthUserCase } from './AuthUserController';

export class AuthUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authUserCase = container.resolve(AuthUserCase);

    const token = await authUserCase.execute({ email, password });

    return response.json(token);
  }
}
