var express = require('express');
var router = express.Router();
var callfile = require('child_process').spawn;
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs')

/* 设计时 API ，不允许删除*/
/* GET users listing. */

router.post('/create_connect', function(req,res,next) {

    
    try{
        var cmd_str = 'node_modules\\.bin\\sequelize init --force'
        exec(cmd_str, function(err, stdout, stderr){
            // 修改config
            var filename = path.join(__dirname, '../app/config.json');
           
            fs.writeFile(filename, JSON.stringify(req.body), 'utf8', function(err){
                if(!err){
                    // 创建数据库
                    var cmd_str = 'node_modules\\.bin\\sequelize db:create'
                    exec(cmd_str, function(err, stdout2, stderr){
                        if(!err) {
                            res.send({code:20000,message:{stdout:stdout,create:stdout2}})
                        } else {
                            res.send({code:20000,message:{err:err,stdout2:stdout2,stderr:stderr}})

                        }
                    })

                } else {
                    console.error(err)
                }
                
            })
            
            
            
        })
    }catch(e){
        console.error(e)
    }
   
    
    
})
router.post('/login', function(req,res,next){
  res.send({
    code: 20000,
    data: {token: 'admin-token'}
  })
})
router.get('/info', function(req,res,next){
  res.send({
    code: 20000,
    data:{
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    }
  })
})
module.exports = router;
