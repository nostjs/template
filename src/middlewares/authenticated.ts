import { Middleware } from '@nostjs/core';

export default class Authenticated extends Middleware {
  handle() {
    this.middleware((req, res, next) => {
      console.log('Authenticated');
      next();
    });
  }
}