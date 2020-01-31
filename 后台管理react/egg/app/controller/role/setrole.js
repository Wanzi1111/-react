'use strict';

const Controller = require('egg').Controller;

class SetroleController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body;
    const setrole=await ctx.service.role.reqsetrole(bigdata)
    if(setrole.affectedRows===1){
        ctx.body = {code:0,msg:"修改成功"};
    }
  }
}

module.exports = SetroleController;
