class DataService {
  constructor() {

  }


  /*возможный шаблон GET-запроса*/
  /*doGET(options) {
    console.log('doGET', options.url);

    let queryPromise =  new Promise((resolve,reject) => {
      $.getJSON(options.url, (data) => {
        resolve(data);
      })
        .fail((error) => {
          reject(error);
        });
      ;
    });

    queryPromise.then((response) => {
      options.onSuccess(response);
    }, (error) => {
        options.onFailure(error);
    });
  }*/
}