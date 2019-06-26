import { Middleware } from '@nostjs/core';

const middleware = new Middleware('authenticated');

middleware.middleware((req, res, next) => {
  console.log('Authenticated');
  next();
});

export default middleware;