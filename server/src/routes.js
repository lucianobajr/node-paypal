import { Router } from 'express';

const routes = new Router();

import PaymentController from './app/controllers/PaymentController';

routes.post('/buy', PaymentController.buy);
routes.get('/success', PaymentController.success);
routes.get('/cancel', PaymentController.cancel);

export default routes;