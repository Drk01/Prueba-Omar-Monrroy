import { HttpServiceService } from "./../../http-service.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  constructor(private httpService: HttpServiceService) {}
  data;
  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.httpService.getData().subscribe((data) => {
      this.data = data;

      console.log(this.data);
    });
  }
}
