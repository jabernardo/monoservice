import type { Request, Response } from 'express';
import { app } from '@monoservice/core';

const name:string = "Hellsso";

console.log("Test");

app.get('/test', async (req: Request, res: Response) => {
  res.send(name);
});

app.listen(8000);