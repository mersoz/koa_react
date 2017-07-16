const router = new require('koa-router')();
const auth = require('../controllers/auth');

router.get('/api/users', auth.index);

router.post('/api/register', auth.register);

router.post('/api/login', auth.login);

module.exports = router;
