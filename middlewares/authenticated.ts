import { Middleware } from '../../build';

const middleware = new Middleware('authenticated');

middleware.handle(() => {
  return true;
});

export default middleware;