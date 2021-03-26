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

  getTimeList() {
    this.list = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    return this.list;
  }

  getDays() {
    this.days = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    ];
    return this.days;
  }
}
