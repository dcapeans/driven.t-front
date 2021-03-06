import api from "./api";
import axios from "axios";
import AuthenticatedApi from "./AuthenticatedApi";

export default class StorageApi extends AuthenticatedApi {
  async uploadUserPicture(file, url) {
    const imageUrl = url.split("?")[0];
    const instance = axios.create();
    instance.put(url, file, { headers: { "Content-Type": "multipart/form-data" } } );
    return imageUrl;   
  }

  async sendImageToDatabase(body) {
    return await api.post("/users/picture", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
