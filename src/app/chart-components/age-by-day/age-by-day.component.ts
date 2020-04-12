import { Component, OnInit } from "@angular/core";

@Component({
  selector: "age-by-day",
  templateUrl: "./age-by-day.component.html",
  styleUrls: ["./age-by-day.component.css"]
})
export class AgeByDay implements OnInit {
  options: any;

  getTooltipFormatter() {
    return params => {
      return '<div style="width:200px; height: 100px">working</div>';
    };
  }

  ngOnInit() {
    this.options = {
      legend: {
        x: "right",
        y: "left",
        orient:'vertical',
        data: [
          {
            name: "30 - 50 Years old",
            icon: "circle",
            textStyle: {
              color: "#a988d8",
              fontWeight: "bold"
            }
          },
          {
            name: "50 - 70 Years old",
            icon: "circle",
            textStyle: {
              color: "#facd07",
              shadowBlur: 10,
              fontWeight: "bold"
            }
          }
        ],
        padding: 0
      },
      tooltip: {},
      dataset: {
        source: [
          [
            "product",
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100",
            "110"
          ],
          [
            "30 - 50 Years old",
            1000,
            2500,
            3000,
            2000,
            1000,
            3000,
            1000,
            2000,
            1300.4,
            2400,
            2400
          ],
          [
            "50 - 70 Years old",
            1500,
            1220,
            1805.7,
            1003.1,
            1806.5,
            1220.1,
            1500,
            1220,
            1805.7,
            1220,
            2400
          ]
        ]
      },
      xAxis: [{ type: "category", gridIndex: 0, axisLine:{ show : false} }],
      yAxis: [{ gridIndex: 0, splitNumber: 3, axisLine:{ show : false} }],
      grid: [{ top: "30%", bottom: "35%",left:'20%' }],
       
      series: [
        { type: "bar", seriesLayoutBy: "row", color: "#a988d8",barGap:'-10%',
        markLine:{precision:0,lineStyle:{ opacity:0}}
        },
        { type: "bar", seriesLayoutBy: "row", color: "#facd07" }
      ]
    };
  }
}
