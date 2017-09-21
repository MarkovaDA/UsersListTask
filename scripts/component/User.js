class User extends EventEmitter {
  constructor(userData) {
    super();

    this.user = userData;
    this.root = null;
    this.displayPattern = this.cacheDisplayPattern();

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

  //шаблон отображения информации о пользователе
  cacheDisplayPattern() {
    let pattern = `
      <div class='custom-modal'>
        <h5>Информация о пользователе</h5>
        <ul>
          <% _.forEach(data, (value, key) => { %>
            <p>
              <span>
                <b>
                  <%- key %>:
                </b>
              </span>
              <span>
                <%- value %>  
              </span>
            </p> 
          <% }); %> 
        </ul>
      </div>
    `;
    return _.template(pattern);
  }

  bindEvents() {
    this.root.on('click', () => {
      const dataToDisplay = {'id': this.user.id, 'pattern': this.displayPattern};
      this.emit('SELECT_ITEM', dataToDisplay);
    });
  }
}