import { Request, Response } from 'express';

import { ImportCategoryService } from './ImportCategoryService';

export class ImportCategorieController {
  constructor(private importCategoryService: ImportCategoryService) {}
  handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategoryService.execute(file);

    return response
      .status(200)
      .send({ message: 'Arquivo importado com sucesso', file });
  }
}
