class Popup {
    constructor(){
        this.root = null;

        this.initDOM();
        this.bindEvents();
    }

    initDOM() {
        this.root = $(`
             <a href = "#fancybox" style="display:none;">Show modal</a>
             
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
      return $('a').fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'hideOnContentClick'	:	true
      })
    }

    updateView(info) {
        const containerInfo = this.root.find('.info');
        containerInfo.empty();

        let rowInfo;

        for(let key in info) {// TODO: Взять lodash! КОДСТИЛЬ!!!!!!!!!!!!!!!!
            if (key === 'id') {
                //id не отображаем
                continue;
            }

            rowInfo = $(`
                <tr>
                    <td><b>${key}:</b></td>
                    <td>${info[key]}</td>
                </tr>
            `);

            containerInfo.append(rowInfo);
        }
    }

    bindEvents(){
        this.root.find('button').on('click', () => {
           this.dialog.close();
        });
    }
}