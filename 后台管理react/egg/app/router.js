'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getlogin', controller.login.index);//登录接口
  router.get('/getlist', controller.list.index);//侧边列表
  router.get('/getuserlist', controller.user.userlist.index);//用户列表
  router.delete('/getuserremove', controller.user.userremove.index);//删除用户信息
  router.post('/getuseradd', controller.user.useradd.index);//添加用户信息
  router.put('/getsetuser', controller.user.setuser.index);//修改用户信息







  router.get('/getrolelist', controller.role.rolelist.index);//角色列表
  router.delete('/getroleremove', controller.role.roleremove.index);//删除角色信息
  router.post('/getroleadd', controller.role.roleadd.index);//添加角色
  router.put('/getsetrole', controller.role.setrole.index);//修改角色信息






};
