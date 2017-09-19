class UserService {
  constructor() {
  }

  getUserById(id) {
    //подумать как сделать не заворачивая в промис
    return new Promise((resolve, reject) => {
      $.getJSON('server/description.json', (data) => {
        const info =_.omit(_.find(data, {'id': id}), 'id');
        resolve(info);
      })
        .fail((error) => {
          reject(error);
        });
    });
  }

  getUsers() {
    return  $.getJSON('server/users.json');
  }
}