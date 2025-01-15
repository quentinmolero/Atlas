import {Waypoint} from "../../core/waypoint";
import {ApiService} from "./api.service";

export class WaypointService {
  public static async getAllWaypoint(): Promise<Waypoint[]> {
    const data = await ApiService.callGetAPI("/waypoints");

    return data.map((item: any) => new Waypoint(item.name, item.latitude, item.longitude));
  }

  public static async addWaypoint(waypoint: Waypoint, password: string): Promise<void> {
    await ApiService.sendPostToAPI("/waypoint", {
      id: null,
      name: waypoint.name,
      latitude: waypoint.latitude,
      longitude: waypoint.longitude,
    }, password);
  }
}
