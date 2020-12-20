import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    console.log("Hello!");
});

export default routes;