class Popup {
  constructor() {
    this.root = null;

    this.initDOM();
    this.bindEvents();
  }

  initDOM() {
    this.root = $(`
      <a href = "#fancybox" class="open-model" style="display:none;"></a>
      <div class="mdl-dialog" id="fancybox" style="display:none;">
        <div class="mdl-dialog__title">Информация</div>
          <div class="mdl-dialog__content">
            <table class="info"></table>
          </div>
      </div>
    `);
  }

  show(info) {
    //обновляем контент для отображения
    this.updateView(info);
    //показываем диалоговое окно
    this.fancyBox().trigger('click');
  }

  fancyBox() {
    return $('a.open-model').fancybox({
      'transitionIn' :	'elastic',
      'transitionOut' :	'elastic',
      'speedIn' :	600,
      'speedOut' :	200,
      'hideOnContentClick' :	true
    })
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
  }

  bindEvents() {
    this.root.find('button').on('click', () => {
      this.dialog.close();
    });
  }
}