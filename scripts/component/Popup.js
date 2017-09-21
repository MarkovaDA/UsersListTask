class Popup {
  constructor() {
    this.root = null;
    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.root = $(`
        <div class = "mdl-dialog" style="display:none;">
          <div class = "mdl-dialog__title">Информация</div>
            <div class = "mdl-dialog__content">
              <table class="info"></table>
            </div>
        </div>
      `)
      .fancybox({
        'transitionIn' :	'elastic',
        'transitionOut' :	'elastic',
        'speedIn' :	600,
        'speedOut' :	200,
        'hideOnContentClick' :	true
      });
  }

  show(info) {
    this.updateView(info);
  }

  updateView(info) {
    const containerInfo = this.root.find('.info');
    containerInfo.empty();

    let rowInfo;

    _.forEach(info, function(value, key) {
      rowInfo = $(`
        <tr>
          <td><b>${key}:</b></td>
          <td>${value}</td>
        </tr>
      `);

      containerInfo.append(rowInfo);
    });

    this.root.click();
  }

  bindEvents() {
    this.root.find('button').on('click', () => {
      this.root.close();
    });
  }
}