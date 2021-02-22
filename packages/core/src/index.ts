import express from 'express';
import { addAsync } from '@awaitjs/express';
import type { Express, Request, Response } from 'express';

export const app: Express = addAsync(express());

app.get('/', async (req: Request, res: Response) => {
  res.send(await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Boo!');
    }, 1000);
  }));
});
