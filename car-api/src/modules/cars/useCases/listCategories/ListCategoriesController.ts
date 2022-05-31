import { Request, Response } from 'express';

import { ListCategoriesService } from './ListCategoriesService';

export class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesService) {}

  handle(request: Request, response: Response) {
    const allCategories = this.listCategoriesService.execute();

    return response.json(allCategories);
  }
}
