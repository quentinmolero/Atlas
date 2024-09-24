import {ApiService} from "./api.service";

export class AuthService {
  public static async login(password: String): Promise<boolean> {
    return await ApiService.getCallStatus("/auth?password=" + password)
      .then(status => {
        if (status == 200) {
          return true;
        }
        return false;
      });
  }
}
