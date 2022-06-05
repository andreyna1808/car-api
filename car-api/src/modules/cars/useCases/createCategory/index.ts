/* import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryService } from './CreateCategoryservice';

export default (): CreateCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  const createCategoryController = new CreateCategoryController(
    createCategoryService,
  );

  return createCategoryController;
};
 */
