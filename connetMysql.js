const mysql = require('mysql')
const connection = mysql.createConnection({
    host     : '127.0.0.1',   // 数据库地址
    user     : 'root',    // 数据库用户
    password : '123456',   // 数据库密码
    database : 'mydatabase'  // 选中数据库
  })
  connection.connect(function(err){
    if(err){
      console.log('连接失败')
    }else{
      console.log('连接成功')
    }
  })
  module.exports = connection