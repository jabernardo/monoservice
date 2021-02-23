import type { Request, Response } from 'express';

class HomeController {
  public async index (req: Request, res: Response): Promise<any> {
    return new Promise((resolve) => {
      resolve('Hello');
    });
  }
}

export default HomeController;