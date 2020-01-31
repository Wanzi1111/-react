'use strict';

const Controller = require('egg').Controller;

class RoleaddController extends Controller {
  async index() {
    const { ctx } = this;
    const {bigdata}=ctx.request.body
    // const bigdata={
    //     role:"主席",
    //     look:"1,2,3",
    //     id:Math.random(10,100)*100
    // }
    const roleadd=await ctx.service.role.reqroleadd(bigdata);
    if(roleadd.affectedRows===1){
        ctx.body = {code:0,msg:"添加角色成功"};
    }
  }
}

module.exports = RoleaddController;
