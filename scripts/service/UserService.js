class UserService extends DataService{
    constructor(){
        super();
    }

    getUserById(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('server/description.json', (data) => {
              const info = data.filter((obj) => {
                return obj['id'] === id;
              })[0];
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