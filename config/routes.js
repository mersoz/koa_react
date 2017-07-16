const router = new require('koa-router')();
const auth = require('../controllers/auth');

router.get('/api/', (ctx)=>{
  ctx.body = 'hello world';
});

router.post('/api/register', auth.register);

module.exports = router;
