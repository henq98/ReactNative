const routes = require('express').Router();

const authMiddleware = require('../middlewares/auth');

routes.use(authMiddleware);

routes.get('/', (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = routes;
