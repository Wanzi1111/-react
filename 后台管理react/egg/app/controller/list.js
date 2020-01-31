'use strict';

const Controller = require('egg').Controller;
const viewdata=require("../../config/tablist");

class ListController extends Controller {
  async index() {
    const { ctx } = this;
  
    //得到当前身份
    const {role}=ctx.info
    const listdata=await ctx.service.role.reqlist(role);//根据当前登录的身份找到这个身份的信息
    let list=[]


    //始['1,2,3,4']  无法循环利用split分隔成['1','2','3','4']
    let arr=[]
     listdata.map(item=>{
     return    arr=item.look.split(",");//逗号分隔
    })




    let newdata=arr.map(val=>viewdata[val]);//找到身份可以看到的列表

    newdata.forEach(item=>{
        let index=list.findIndex(val=>val.titlename===item.titlename)


        if(index!=-1){
            list[index].children.push({
                id:item.id,
                name:item.name,
                to:item.to
            })
            return 
        }



        list.push({
            id:item.id,
            titlename:item.titlename,
            icon:item.icon,
            children:[{
                id:item.id,
                name:item.name,
                to:item.to
            }]
        })  
    })
    ctx.body = {code:0,msg:"请求列表成功",list};
  }
}

module.exports = ListController;
