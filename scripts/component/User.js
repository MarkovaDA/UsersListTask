class User extends EventEmitter {
    constructor(userData) {
        super();

        this.user = userData;
        this.root = null;

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        //TODO click на самом item, не по кнопке
        this.root = $(`
             <li class="mdl-list__item">
                <span class="mdl-list__item-primary-content">
                  <i class="material-icons  mdl-list__item-avatar">person</i>
                  ${this.user.firstname} ${this.user.lastname}
                </span>
                <span class="mdl-list__item-secondary-action">
                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored btn-close">
                        Подробнее
                    </button>
                </span>
             </li>
        `);
    }

    bindEvents() {
        this.root.find('.btn-close').on('click', () => {
            this.emit('SELECT_ITEM', this.user.id);
        });
    }
}