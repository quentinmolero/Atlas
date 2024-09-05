import {environment} from "../../environments/environment";

export class ApiService {
  public static callGetAPI(url: string): Promise<any> {
    return fetch(environment.apiUrl + url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
      }
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}
