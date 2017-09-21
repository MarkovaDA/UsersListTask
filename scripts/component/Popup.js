class Popup {
  constructor() {
    this.root = null;

    this.initDOM();
  }

  initDOM() {
    this.root =  $.fancybox;
  }

  show(info) {
    //вот этот код исправить в лучшем исполнении с lodash
    let displayInfo = `<div class='custom-modal'><h5>Информация о пользователе</h5>`;
    _.forEach(info, function (value, key) {

      displayInfo = displayInfo.concat(`
        <p>
          <span><b>${key}:</b></span>
          <span>${value}</span>
        </p>
      `);
    });
    displayInfo = displayInfo.concat(`</div>`);
    this.root.open(displayInfo);
  }

}