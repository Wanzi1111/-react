'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken");

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    let {user,pwd}=ctx.request.body;
    const logindata=await ctx.service.user.reqlogin(user)
    //非空处理
    if(user===""){
    ctx.body = {code:4,msg:"账号不能为空"};
    return 
    }
    if(pwd===""){
      ctx.body = {code:4,msg:"密码不能为空"};
      return 
    }
    if(logindata.length===0){
      ctx.body = {code:1,msg:"账号不存在"};
      return
    }
    if(logindata[0].pwd!=pwd){
    ctx.body = {code:1,msg:"密码错误"};
    return  
    }
    const token=jwt.sign({...logindata[0]},"wanzi")
    
    ctx.body = {code:0,msg:"登录成功",token};
  }
}
module.exports = LoginController;
