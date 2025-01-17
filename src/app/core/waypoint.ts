export class Waypoint {
  private readonly _id: number | null;
  private readonly _name: String;
  private readonly _latitude: number;
  private readonly _longitude: number;

  constructor(id: number | null, name: String, latitude: number, longitude: number) {
    this._id = id;
    this._name = name;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  get id(): number | null{
    return this._id;
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
