const Service = require('egg').Service;

class RoleService extends Service {
  async reqlist(role) {
    return await this.app.mysql.select("role",{where:{role}})
  }
  async reqrolelist() {
    return await this.app.mysql.select("role")
  }
  async reqroleremove(id) {
    return await this.app.mysql.delete("role",{id:id})
  }
  async reqroleadd(bigdata) {
    return await this.app.mysql.insert("role",{id:bigdata.id,role:bigdata.role,look:bigdata.looks})
  }
  async reqsetrole(bigdata) {
    return await this.app.mysql.update("role",bigdata,{where:{id:bigdata.id}});
  }
  
}

module.exports = RoleService;