import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryService } from './CreateCategoryservice';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryService = new CreateCategoryService(categoriesRepository);
export const createCategoryController = new CreateCategoryController(
  createCategoryService,
);
