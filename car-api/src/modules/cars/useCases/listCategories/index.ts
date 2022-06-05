// import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesService } from './ListCategoriesService';

const categoriesRepository = null;
const listCategoriesServices = new ListCategoriesService(categoriesRepository);
export const listCategoriesController = new ListCategoriesController(
  listCategoriesServices,
);
