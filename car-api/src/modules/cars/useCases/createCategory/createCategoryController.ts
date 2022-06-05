import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryService } from './CreateCategoryservice';

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoriesUseCase = container.resolve(CreateCategoryService);

    await createCategoriesUseCase.execute({ name, description });

    return response.status(201).send({ message: 'Dados criados com sucesso' });
  }
}
