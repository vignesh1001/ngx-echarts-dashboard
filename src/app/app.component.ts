import { Component, OnInit } from "@angular/core";
import { empty } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  isEnglish = true;
  textChangeValue: string;
  res = [{"FIPS":"31003","Admin2":"Antelope","Province_State":"Nebraska","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":42.176955,"Long_":-98.066628,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Antelope, Nebraska, US"},{"FIPS":"26009","Admin2":"Antrim","Province_State":"Michigan","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":44.996902,"Long_":-85.155031,"Confirmed":4,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Antrim, Michigan, US"},{"FIPS":"4001","Admin2":"Apache","Province_State":"Arizona","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":35.39465,"Long_":-109.489238,"Confirmed":42,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Apache,Arizona,US"},{"FIPS":"19007","Admin2":"Appanoose","Province_State":"Iowa","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":40.743245,"Long_":-92.868659,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Appanoose, Iowa, US"},{"FIPS":"13001","Admin2":"Appling","Province_State":"Georgia","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":31.748472,"Long_":-82.289091,"Confirmed":5,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Appling, Georgia, US"},{"FIPS":"8005","Admin2":"Arapahoe","Province_State":"Colorado","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":39.649775,"Long_":-104.335362,"Confirmed":500,"Deaths":10,"Recovered":0,"Active":0,"Combined_Key":"Arapahoe, Colorado, US"},{"FIPS":"8007","Admin2":"Archuleta","Province_State":"Colorado","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":37.194742,"Long_":-107.047687,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Archuleta, Colorado, US"},{"FIPS":"26011","Admin2":"Arenac","Province_State":"Michigan","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":44.063626,"Long_":-83.892776,"Confirmed":3,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Arenac, Michigan, US"},{"FIPS":"5001","Admin2":"Arkansas","Province_State":"Arkansas","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":34.291452,"Long_":-91.372773,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Arkansas, Arkansas, US"},{"FIPS":"51013","Admin2":"Arlington","Province_State":"Virginia","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":38.876767,"Long_":-77.101399,"Confirmed":150,"Deaths":2,"Recovered":0,"Active":0,"Combined_Key":"Arlington, Virginia, US"},{"FIPS":"42005","Admin2":"Armstrong","Province_State":"Pennsylvania","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":40.816656,"Long_":-79.462908,"Confirmed":12,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Armstrong, Pennsylvania, US"},{"FIPS":"23003","Admin2":"Aroostook","Province_State":"Maine","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":46.659263,"Long_":-68.598412,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Aroostook, Maine, US"},{"FIPS":"22005","Admin2":"Ascension","Province_State":"Louisiana","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":30.204062,"Long_":-90.913284,"Confirmed":284,"Deaths":7,"Recovered":0,"Active":0,"Combined_Key":"Ascension, Louisiana, US"},{"FIPS":"37009","Admin2":"Ashe","Province_State":"North Carolina","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":36.432962,"Long_":-81.498627,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Ashe, North Carolina, US"},{"FIPS":"39005","Admin2":"Ashland","Province_State":"Ohio","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":40.847723,"Long_":-82.272808,"Confirmed":3,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Ashland, Ohio, US"},{"FIPS":"55003","Admin2":"Ashland","Province_State":"Wisconsin","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":46.319569,"Long_":-90.678371,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Ashland, Wisconsin, US"},{"FIPS":"5003","Admin2":"Ashley","Province_State":"Arkansas","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":33.191535,"Long_":-91.769847,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Ashley, Arkansas, US"},{"FIPS":"39007","Admin2":"Ashtabula","Province_State":"Ohio","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":41.708603,"Long_":-80.748302,"Confirmed":11,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Ashtabula, Ohio, US"},{"FIPS":"53003","Admin2":"Asotin","Province_State":"Washington","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":46.188944,"Long_":-117.202285,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Asotin, Washington, US"},{"FIPS":"22007","Admin2":"Assumption","Province_State":"Louisiana","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":29.899462,"Long_":-91.064616,"Confirmed":56,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Assumption, Louisiana, US"},{"FIPS":"48013","Admin2":"Atascosa","Province_State":"Texas","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":28.89333,"Long_":-98.527305,"Confirmed":2,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Atascosa, Texas, US"},{"FIPS":"20005","Admin2":"Atchison","Province_State":"Kansas","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":39.531857,"Long_":-95.3087,"Confirmed":2,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Atchison, Kansas, US"}];

  textChange(value){

    const mapList = this.filterTime();
    let data;

    data = mapList.filter(({FIPS}) => FIPS === this.textChangeValue );

    if(data.length === 0){
      data = mapList.filter(({Combined_Key}) => Combined_Key.toLowerCase().includes(this.textChangeValue.toLowerCase()));
    }
    this.googleMap(data);
  }

  googleMap(mapList){

     var gMap = new google.maps.Map(document.getElementById("map"),{zoom:3});
      gMap.setCenter(new google.maps.LatLng(41.850033, -87.6500523));

      var infoWindow = new google.maps.InfoWindow({
        content: '',
      });

       mapList.forEach(({ Lat, Long_,Admin2 }) => {
        var myLatLng = {
          lat: Lat,
          lng: Long_
        };
        
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: gMap,
          title: Admin2,
        });

        google.maps.event.addListener(marker, 'click', (function(marker) {
          return function() {
            console.log(marker,marker.position.lat(),marker.position.lng());
            const selectedInfo = mapList.find(
                item=>item.Lat===marker.position.lat() && 
                item.Long_===marker.position.lng());
            if(selectedInfo){
              const htmlArr= ['<div>Covid20 - '+selectedInfo.Combined_Key+'</div>'];
              htmlArr.push('<table width="60%">');
              htmlArr.push('<tr><td style="font-size: 14px;font-weight: bold;">Active</td><td>'+selectedInfo.Active+'</td></tr>');
              htmlArr.push('<tr><td style="font-size: 14px;font-weight: bold;">Confirmed</td><td>'+selectedInfo.Confirmed+'</td></tr>');
              htmlArr.push('<tr><td style="font-size: 14px;font-weight: bold;">Deaths</td><td>'+selectedInfo.Deaths+'</td></tr>');
              htmlArr.push('<tr><td style="font-size: 14px;font-weight: bold;">Recovered</td><td>'+selectedInfo.Recovered+'</td></tr>');
              htmlArr.push('</table>');
              infoWindow.setContent(htmlArr.join(''));
              console.log(htmlArr.join());
              infoWindow.open(gMap, marker);
            }
          }
        })(marker));

      });

  }

  filterTime(){
     const currentDate = new Date();
      const mapList = this.res.filter(({ Last_Update }) => currentDate.getFullYear()+'-'+(currentDate.getMonth()+1>9?(currentDate.getMonth()+1):'0'+(currentDate.getMonth()+1))+'-'+currentDate.getDate() === Last_Update.substring(0, 10));
      return mapList;
  }

  ngOnInit() {
    fetch(
      "\\13.86.101.62:7005/api/covid19Data/cv19InfoByCountry?country=us",{headers: {
      'Content-Type': 'application/json',
    }},
    ).then((response) => {
      return response.text();
    })
    .then(response => {
     const mapList = this.filterTime();

      this.googleMap(mapList);
      // {"FIPS":"31003","Admin2":"Antelope","Province_State":"Nebraska","Country_Region":"US","Last_Update":"2020-04-12T23:34:21.000Z","Lat":42.176955,"Long_":-98.066628,"Confirmed":1,"Deaths":0,"Recovered":0,"Active":0,"Combined_Key":"Antelope, Nebraska, US"},
     
    });
  }
}
