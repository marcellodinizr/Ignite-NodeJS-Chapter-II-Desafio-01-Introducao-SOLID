import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
	constructor(private createUserUseCase: CreateUserUseCase) {}

	handle(request: Request, response: Response): Response {
		// Complete aqui
	}
}

export { CreateUserController };
