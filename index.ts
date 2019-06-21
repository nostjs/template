import Nost from '@nostjs/core';

import models from './models';
import middlewares from './middlewares';
import routes from './routes';

Nost.models = models;
Nost.middlewares = middlewares;
Nost.routes = routes;

Nost.init();