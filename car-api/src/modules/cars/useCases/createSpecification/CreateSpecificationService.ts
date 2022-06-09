import { inject, injectable } from 'tsyringe';

import { Errors } from '../../../../errors/Errors';
import { ISpecificationRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationService {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository,
  ) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Errors('Specifications already exists!');
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
