const router = new require('koa-router')();
const auth = require('../controllers/auth');
const user = require('../controllers/user');
const g14 = require('../lib/secureRoutes');
router.get('/api/users', g14, user.index);

router.get('/api/users/:id', g14, user.show);
router.put('/api/users/:id', g14, user.update);
router.delete('/api/users/:id', g14, user.remove);

router.post('/api/register', auth.register);

router.post('/api/login', auth.login);

module.exports = router;
