'use strict';

const Controller = require('egg').Controller;

class RoleremoveController extends Controller {
  async index() {
    const { ctx } = this;
    const {id}=ctx.request.body
    const rerole=await ctx.service.role.reqroleremove(id)
    if(rerole.affectedRows===1){
        const rolelist=await ctx.service.role.reqrolelist()
        ctx.body = {code:0,msg:"删除角色信息成功",rolelist};

    }
  }
}

module.exports = RoleremoveController;
