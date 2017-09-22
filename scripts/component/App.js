class App {
  constructor(elem) {
    this.root = elem;
    this.userService = new UserService();
    this.displayPattern = this.cacheDisplayPattern();

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
    this.popup = new Popup({
        afterShow: function() {
          console.log('modal has been shown');
        },
        openEffect : 'fade',
        openSpeed : 'fast',
        closeClick : 'true',
        type : 'inline',
        autoSize: false,
        width: '300px',
        height: '150px',
        css: 'text-align: center'
    });

    this.root.append(this.popup.root);
  }

  bindEvents() {
    //клик на пользователе -- отображение подробной информации по id
    this.userList.on('SHOW_ITEM', (userId) => {

      this.userService.getUserById(userId).then((info) => {
         //открытие popup
         this.popup.show(this.displayPattern({'data': info}));
      }, (error) => {
        console.log(error);
      });
    });
  }

  //шаблон отображения информации о пользователе
  cacheDisplayPattern() {
    let pattern = `
      <div class='custom-modal'>
        <h5>Информация о пользователе</h5>
          <table>
            <% _.forEach(data, (value, key) => { %>
              <tr>
                <td>
                  <b>
                    <%- key %>:
                  </b>
                </td>
                <td>
                  <%- value %>  
                </td>
              </tr> 
            <% }); %>
          </table> 
      </div>
    `;
    return _.template(pattern);
  }

}

