'use strict';

const Controller = require('egg').Controller;

class RolelistController extends Controller {
  async index() {
    const { ctx } = this;
    const rolelist=await ctx.service.role.reqrolelist()
    ctx.body = {code:0,msg:"请求角色列表成功",rolelist};
  }
}
module.exports = RolelistController;
