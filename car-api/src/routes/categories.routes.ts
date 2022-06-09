import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/createCategoryController';
import { ImportCategorieController } from '../modules/cars/useCases/importCategory/ImportCategorieController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const upload = multer({
  dest: './tmp',
});

export const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const importCategorieController = new ImportCategorieController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategorieController.handle,
);
