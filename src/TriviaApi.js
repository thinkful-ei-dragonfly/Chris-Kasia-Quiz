'use strict';




class TriviaApi {
  static BASE_URL= `https://opentdb.com/api.php?type=multiple`;
  baseFetchMethod(amount = 10) {
        const url = new URL(TriviaApi.BASE_URL);
        url.searchParams.set('amount', amount);
        return fetch(url)
          .then(response => {
            // if (!response.ok) {
            //   error = { code: response.status };
            // }
            return response.json();
          });
      }

}
export default TriviaApi;
