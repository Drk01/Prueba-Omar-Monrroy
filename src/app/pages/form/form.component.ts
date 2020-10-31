import { HttpServiceService } from "./../../http-service.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}

  ngOnInit() {}

  enviar(form) {
    console.log("Datos enviados al backend" ,form);

    this.httpService.postData(form).subscribe(data => console.log(data));
  }
}
