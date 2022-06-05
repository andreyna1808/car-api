import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategoryController';
import { importCategorieController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const upload = multer({
  dest: './tmp',
});

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategorieController.handle(request, response);
});
