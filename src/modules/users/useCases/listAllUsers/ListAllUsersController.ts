import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const user_id = request.get('user_id');

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.status(200).send(users);
    } catch(error) {
      return response.status(400).send({ error: error.message });
    }
  }
}

export { ListAllUsersController };
