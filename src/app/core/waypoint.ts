export class Waypoint {
  private readonly _name: String;
  private readonly _latitude: number;
  private readonly _longitude: number;

  constructor(name: String, latitude: number, longitude: number) {
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get name(): String {
    return this._name;
  }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }
}
