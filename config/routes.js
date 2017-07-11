const router = new require('koa-router')();

router.get('/', (ctx)=>{
  ctx.body = 'hello world';
});

module.exports = router;
