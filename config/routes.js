const router = new require('koa-router')();
const auth = require('../controllers/auth');
const user = require('../controllers/user');

router.get('/api/users', user.index);

router.get('/api/users/:id', user.show);
router.put('/api/users/:id', user.update);

router.post('/api/register', auth.register);

router.post('/api/login', auth.login);

module.exports = router;
