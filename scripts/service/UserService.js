class UserService {
  constructor() {
  }

  getUserById(id) {
    return new Promise((resolve, reject) => {
      $.getJSON('server/description.json', (data) => {
        //получаем подробную информацию о пользователе, индетификатор не отображаем
        const info =_.omit(_.find(data, {'id': id}), 'id');
        resolve(info);
      })
        .fail((error) => {
          reject(error);
        });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      $.getJSON('server/users.json', (data) => {
        resolve(data);
      })
        .fail((error) => {
          reject(error);
        });
    });
  }
}