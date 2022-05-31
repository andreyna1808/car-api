import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationService } from './CreateSpecificationService';

const specificationRepository = new SpecificationRepository();
const createSpecificationService = new CreateSpecificationService(
  specificationRepository,
);
export const createSpecificationController = new CreateSpecificationController(
  createSpecificationService,
);
