import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: "confirmed-cases",
  templateUrl: "./confirmed-cases.component.html",
  styleUrls: ["./confirmed-cases.component.css"]
})
export class ConfirmedCases implements OnInit {
  options: any;
  newCases;
  totalCases;
  percentIncrease;

  ngOnInit() {
    this.newCases = 122;
    this.totalCases = 2374;
    this.percentIncrease = 2.5;
  }
}
