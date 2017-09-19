class App {
  constructor(elem) {
    this.root = elem;
    this.userService = new UserService();

    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().then((data) => {
      this.initUsersList(data);

      this.initPopup();

      this.bindEvents();

    }, (error) => {
      console.log(error);
    });
  }

  initUsersList(data) {
    this.userList = new UserList(data);
    this.root.append(this.userList.root);
  }

  initPopup() {
    this.popup = new Popup();
    this.root.append(this.popup.root);
  }

  bindEvents() {
    //клик на пользователе -- отображение подробной информации по id
    this.userList.on('SHOW_ITEM', (id) => {
      //получаем описание пользователя по его id
      this.userService.getUserById(id).then((info) => {
        this.popup.show(info);
      }, (error) => {
        console.log(error);
      });
    });
  }

}

