import { Request, Response } from 'express';

import { CreateCategoryService } from './CreateCategoryservice';

export class CreateCategoryController {
  constructor(private createCategoriesUseCase: CreateCategoryService) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoriesUseCase.execute({ name, description });

    return response.status(201).send({ message: 'Dados criados com sucesso' });
  }
}
