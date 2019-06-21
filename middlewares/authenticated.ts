import { Middleware } from '@nostjs/core';

const middleware = new Middleware('authenticated');

middleware.handle(() => {
  return true;
});

export default middleware;