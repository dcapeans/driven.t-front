import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class BookingApi extends AuthenticatedApi {
  async confirmBooking(body) {
    return await api.post("/bookings", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
