'use strict';

const Controller = require('egg').Controller;

class UseraddController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body;
    // bigdata={
    //     user:"纪永升",
    //     pwd:"123",
    //     role:"经理",
    //     id:Math.random(10,100)
    // }
    const userData=await ctx.service.user.requseradd(bigdata)
    if(userData.affectedRows===1){
      ctx.body = {code:0,msg:"添加用户成功"};
    }
  }
}

module.exports = UseraddController;
