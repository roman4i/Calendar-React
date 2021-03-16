// This module is a singletone (as I understand it)
export default class StaticStorage {
  static getInstance() {
    if (!StaticStorage.instance) {
      StaticStorage.instance = new StaticStorage();
    }
    return StaticStorage.instance;
  }

  getNames() {
    this.names = ['Igor', 'Oleg', 'Olga', 'Yaroslav', 'Anna'];
    return this.names;
  }

  getAdmins() {
    this.admins = ['Oleg', 'Olga'];
    return this.admins;
  }
}
