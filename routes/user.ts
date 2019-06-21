import { Route } from '@nostjs/core';

const route = new Route('/user/');

route.middleware = ["authenticated"];

route.get(':id', (req, res) => {
  res.sendStatus(200);
});

route.post('/', (req, res) => {
  res.sendStatus(200);
});

export default route;