import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAvatarCase } from './updateAvatarCase';

export class UpdateAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const avatar_file = req.file.filename;

    const updateAvatarCase = container.resolve(UpdateAvatarCase);
    await updateAvatarCase.execute({ user_id: id, avatar_file });

    return res.status(204);
  }
}
