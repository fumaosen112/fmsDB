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

http.use(session({
    secret:'aksdjdqkwhkjh',//设置签名密钥 内容可以任意填写
    cookie: {maxAge:100*1000 },//设置cookie的过期时间 例：80s后session和相应的cookie失效过期
    resave:true,//强制保存 如果session没有被修改也要重新保存
    saveUninitialized:false//如果原先没有session那么就设置 否则不设置
    }));

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
                         //设置session
                         req.session.inkl=true;
                         req.session.usename=usename;
                      
                        res.send({mss:"登陆成功",status:200,link:2,session:req.session});
                    }else if(ok.length==0){
                        res.send({mss:"登陆失败",status:200,link:3});
                    }
                },(err)=>{
                    res.send("登录失败")
                })
               }   
    })
});

http.get("/",function(req,res){
    console.log(req.session.inkl);
    // res.send(req.session.inkl);
        if(req.session.inkl==true){
            res.send({mss:"用户登陆过",status:200,link:6,usename:req.session.usename});
        }else{
            res.send({mss:"用户没有登录",status:200,link:7});
        }
})

http.listen(3000,function(){
    console.log("连接我");
})