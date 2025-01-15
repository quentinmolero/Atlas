import {environment} from "../../../environments/environment";

export class ApiService {
  public static callGetAPI(url: string): Promise<any> {
    return fetch(environment.apiUrl + url)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  public static getCallStatus(url: string): Promise<number> {
    return fetch(environment.apiUrl + url)
      .then(res => {
        return res.status;
      })
      .catch(err => {
        console.error(err);
        return err.status;
      });
  }

  public static sendPostToAPI(url: string, body: any, password: string): Promise<any> {
    return fetch(`${environment.apiUrl}${url}`, {
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'token': password,
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .catch(err => console.error(err));
  }
}
