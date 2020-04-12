import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isEnglish = true;

  ngOnInit() {
    fetch(
      "http://13.86.101.62:7005/api/covid19Data/cv19InfoByCountry?country=us"
    ).then(res => {
      const clearTime = date => {
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        return date;
      };
      const currentDate = new Date();
      clearTime(currentDate);

      var gMap = new google.maps.Map(document.getElementById("map"));
      gMap.setCenter(new google.maps.LatLng(41.850033, -87.6500523));

      const mapList = res.filter(({ Last_Update }) => {
        const lastUpdateDate = new Date(Last_Update.substring(0, 10));
        clearTime(lastUpdateDate);
        return currentDate.getTime() === lastUpdateDate.getTime();
      });
      // {"FIPS":"31003","Admin2":"Antelope","Province_State":"Nebraska","Country_Region":"US","Last_Update":"2020-04-04T23:34:21.000Z","Lat":42.176955,"Long_":-98.066628,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Antelope, Nebraska, US"},
      mapList.forEach(({ Lat, Long_ }) => {
        var myLatLng = {
          lat: Lat,
          lng: Long_
        };
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: gMap,
          title: "Hello World!"
        });

      });
    });
  }
}
