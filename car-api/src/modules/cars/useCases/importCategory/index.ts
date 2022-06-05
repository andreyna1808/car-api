// import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategorieController } from './ImportCategorieController';
import { ImportCategoryService } from './ImportCategoryService';

const categorieRepository = null;
const importCategoryService = new ImportCategoryService(categorieRepository);
export const importCategorieController = new ImportCategorieController(
  importCategoryService,
);
