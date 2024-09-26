export class Password {
  private readonly _password: string;
  private readonly _isValid: boolean;

  constructor(password: string, isValid: boolean) {
    this._password = password;
    this._isValid = isValid;
  }

  get password() {
    return this._password;
  }

  get isValid() {
    return this._isValid;
  }
}
