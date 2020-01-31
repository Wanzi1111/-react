'use strict';

const Controller = require('egg').Controller;

class SetuserController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body;
    const setuser=await ctx.service.user.reqsetuser(bigdata)
    if(setuser.affectedRows===1){
        ctx.body = {code:0,msg:"修改成功"};
    }
  }
}

module.exports = SetuserController;
