'use strict';

import { STATUS_CODES } from "http";


const BASE_URL= `https://opentdb.com/api.php?amount=5`;

class TriviaApi {
  baseFetchMethod() {
        let error = false;
        return fetch()
          .then(response => {
            if (!response.ok) {
              error = { code: response.status };
            }
            return response.json();
          })
          .then(data => {
            if (error) {
              error.message = data.message;
              return Promise.reject(error);
            }
            return data;
          });
      }

}
export default TriviaApi;
