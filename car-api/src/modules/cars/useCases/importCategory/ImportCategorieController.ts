import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryService } from './ImportCategoryService';

export class ImportCategorieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryService = container.resolve(ImportCategoryService);

    await importCategoryService.execute(file);

    return response
      .status(201)
      .send({ message: 'Arquivo importado com sucesso', file });
  }
}
