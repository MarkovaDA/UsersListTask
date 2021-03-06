class UserList extends EventEmitter {
  constructor(usersData) {
    super();

    this.userList = usersData;
    this.root = null;

    this.initDOM();
    this.initItems();
  }

  initDOM() {
    this.root = $(`
      <ul class="demo-list-control mdl-list">
      </ul>
    `);
  }

  /*добавляем дочерние элементы списка*/
  initItems() {
    this.userList.forEach((item) => {
      const childComponent = new User(item);

      childComponent.on('SELECT_ITEM', (userId) => {
        this.emit('SHOW_ITEM', userId);
      });

      this.root.append(childComponent.root);
    });
  }
}