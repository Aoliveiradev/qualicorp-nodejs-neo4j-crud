const restify = require('restify');
const {Router} = require("restify-router");

const server = restify.createServer();

const router = new Router();
router.use(restify.plugins.bodyParser());
router.add("/users", require('./routes/userRoutes'));
router.applyRoutes(server);

module.exports = server;
