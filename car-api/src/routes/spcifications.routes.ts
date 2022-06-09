import { Router } from 'express';

import { ensureAuth } from '../middlewares/ensureAth';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

export const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuth);
specificationsRoutes.post('/', createSpecificationController.handle);
