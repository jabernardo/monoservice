import express from 'express';
import morgan from 'morgan';
import { addAsync, ExpressWithAsync } from '@awaitjs/express';

export class Application {
  app: ExpressWithAsync;

  private __configureServer(): void {
    this.app = addAsync(express());
    this.app.useAsync(morgan('combined'));
  }

  constructor() {
    this.__configureServer();
  }

  listen(port: number) {
    this.app.listen(port);
  }
}