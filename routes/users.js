const router = require('koa-router')()
router.prefix('/users')
const connection = require('../connetMysql.js')
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.get('/json', async (ctx, next) => {
  let res={
    code:0,
    mesg:{}
  }
  await new Promise((resolve,reject)=>{
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) throw error
      // connected! 
      resolve(results)
      res.mesg=results
      // 结束会话
      connection.end((err)=>{
        if(err){
          console.log(err)
          return
        }else{
          console.log('连接关闭')
        }
      })
    });
   }).then((results)=>{
    res.mesg=results
    ctx.body = res
   }).catch((err)=>{
    res.code=1
    es.mesg='查询失败'
    ctx.body = res
   })
   
  
})
module.exports = router
