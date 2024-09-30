import {environment} from "../../../environments/environment";

export class ApiService {
  public static callGetAPI(url: string): Promise<any> {
    return fetch(environment.apiUrl + url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
      }
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  public static getCallStatus(url: string): Promise<number> {
    return fetch(environment.apiUrl + url, {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
      }
    })
      .then(res => {
        return res.status;
      })
      .catch(err => {
        console.error(err);
        return err.status;
      });
  }
}
