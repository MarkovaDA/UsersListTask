class User extends EventEmitter {
  constructor(userData) {
    super();

    this.user = userData;
    this.root = null;

    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.root = $(`
      <li class="mdl-list__item">
        <span class="mdl-list__item-primary-content">
          <i class="material-icons  mdl-list__item-avatar">person</i>
            ${this.user.firstname} ${this.user.lastname}
        </span>
      </li>
    `);
  }

  bindEvents() {
    this.root.on('click', () => {
      this.emit('SELECT_ITEM', this.user.id);
    });
  }
}