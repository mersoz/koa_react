const router = new require('koa-router')();

router.get('/api/', (ctx)=>{
  ctx.body = 'hello world';
});

module.exports = router;
