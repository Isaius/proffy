import express from 'express';

import ClassController from './controllers/ClassController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

routes.get('/classes', ClassController.index);
routes.post('/classes', ClassController.store);

routes.get('/connections', ConnectionsController.index);
routes.post('/connections', ConnectionsController.store);

export default routes;

