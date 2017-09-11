class Popup {
    constructor(){
        this.root = null;

        this.initDOM();
        this.bindEvents();
    }

    initDOM(){
        //TODO: взять другой диалог для использования, fancyBox
        this.root = $(`
            <dialog class="mdl-dialog">
                <div class="mdl-dialog__title">Информация</div>
                <div class="mdl-dialog__content">
                     <table class="info"></table>
                </div>
                <div class="mdl-dialog__actions mdl-dialog__actions">
                    <button type="button" class="mdl-button close">ОК</button>                  
                </div>
            </dialog>
        `);

        this.dialog = this.root.get(0);
    }

    show(info) {
        //обновляем контент для отображения
        this.updateView(info);
        //показываем диалоговое окно
        this.dialog.showModal();
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