import Nost from '@nostjs/core';

import models from './models';
import middlewares from './middlewares';
import routes from './routes';

const nost = new Nost();

nost.models = models;
nost.middlewares = middlewares;
nost.routes = routes;

nost.init();