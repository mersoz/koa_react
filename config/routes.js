const router = new require('koa-router')();
const auth = require('../controllers/auth');

router.get('/api/users', auth.index);

router.post('/api/register', auth.register);

module.exports = router;
