const Service = require('egg').Service;

class UserService extends Service {
  async reqlogin(user) {
    return await this.app.mysql.select("userdata",{where:{user}})
  }
  async requserlist() {
    return await this.app.mysql.select("userdata");
  }
  async requserremove(id) {
    return await this.app.mysql.delete("userdata",{id:id});
  }
  async requseradd(bigdata) {
    return await this.app.mysql.insert("userdata",{id:bigdata.id,user:bigdata.user,pwd:bigdata.pwd,role:bigdata.role});
  }
  async reqsetuser(bigdata) {
    return await this.app.mysql.update("userdata",bigdata,{where:{id:bigdata.id}});
  }
}

module.exports = UserService;