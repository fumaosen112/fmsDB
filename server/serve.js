var express=require("express");
var mongoose=require("mongoose");
var crypto=require("crypto");
var http=express();

http.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

 res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');

    next()
})

var useInfor=mongoose.model("use",{
    name:String,
    passw:String
})
// 引用session模块
var session=require("express-session");

http.get("/zhuce",function(req,res){
    var usename=req.query.usename;
    var usepassw=req.query.usepassw;
    //加密处理
    var passwMd5=crypto.createHash('md5').update(usepassw).digest('hex');
    console.log(usename+"-----"+passwMd5);
    mongoose.connect("mongodb://127.0.0.1:27017/DB",{useNewUrlParser:true},function(err){
                if(err){
                    res.send("失败");
                }else{

                  
                    var vipInfoe=new useInfor({
                        name:usename,
                        passw:passwMd5,
                    });
                    vipInfoe.save().then((ok)=>{
                        res.send({mes:"CG",status:200,link:1})
                    },(err)=>{
                        res.send({mes:"fali",status:200,link:0})
                    })
                }
    })

});

http.get("/login",function(req,res){
    var usename=req.query.usename;
    var usepassw=req.query.usepassw;
    //加密处理
    var passwMd5=crypto.createHash('md5').update(usepassw).digest('hex');
    mongoose.connect("mongodb://127.0.0.1:27017/DB",{useNewUrlParser:true},function(err){
               if(err){
                   console.log("连接失败")
               } else{
                useInfor.find({name:usename,passw:passwMd5}).then((ok)=>{
                    if(ok.length>0){
                      
                        res.send({mss:"登陆成功",status:200,link:2,session:req.session});
                    }else if(ok.length==0){
                        res.send({mss:"登陆失败",status:200,link:3});
                    }
                },(err)=>{
                    res.send("登录失败")
                })
               }   
    })
})
http.listen(3000,function(){
    console.log("连接我");
})