import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private htpp: HttpClient) {}

  getData() {
    this.htpp.get(`${environment.endpoint}app/api/empleado`).subscribe((data) => data);
  }
}
