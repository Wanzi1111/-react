'use strict';

const Controller = require('egg').Controller;

class UserremoveController extends Controller {
  async index() {
    const { ctx } = this;
    const {id}=ctx.request.body
    const reuser=await ctx.service.user.requserremove(id)
    if(reuser.affectedRows===1){
        const userlist=await ctx.service.user.requserlist();
        ctx.body = {code:0,msg:"删除用户信息成功",userlist};

    }
  }
}

module.exports = UserremoveController;
