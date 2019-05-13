'use strict';


const BASE_URL= `https://opentdb.com/api.php?amount=5&type=multiple`;

class TriviaApi {
  baseFetchMethod() {
        let error;
        return fetch(BASE_URL)
          .then(response => {
            // if (!response.ok) {
            //   error = { code: response.status };
            // }
            return response.json();
          })
          .then(data => {
            // if (error) {
            //   error.message = data.message;
            //   return Promise.reject(error);
            //}
            return data;
          });
      }

}
export default TriviaApi;
