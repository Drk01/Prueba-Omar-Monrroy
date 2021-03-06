import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
@Injectable({
  providedIn: "root",
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http
      .get(`${environment.endpoint}/app/api/empleado`)
  }

  postData(data) {
    return this.http.post(`${environment.endpoint}/app/api/empleado`, data);
  }
}
