import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
declare const $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewAllPracticesbtnFlag = true;
  viewAllPractices = false;
  eName = '';
  eEmail = '';
  eSubject = '';
  eMessage = '';
  constructor(private homeService: HomeService) { }
  topimages = [];
  ngOnInit() {
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    this.topimages.push('./assets/img/home/will.jpg');
    // function initMap() {
    //   var uluru = {lat: -25.363, lng: 131.044};
    //   var grayStyles = [
    //     {
    //       featureType: 'all',
    //       stylers: [
    //         { saturation: -90 },
    //         { lightness: 50 }
    //       ]
    //     },
    //     {elementType: 'labels.text.fill', stylers: [{color: '#A3A3A3'}]}
    //   ];
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -31.197, lng: 150.744},
    //     zoom: 9,
    //     styles: grayStyles,
    //     scrollwheel:  false
    //   });
    // }

  }

  viewAllPracticesfun() {
    this.viewAllPractices = true;
    this.viewAllPracticesbtnFlag = false;
  }
  sendEmail() {
    const payload = {
      name: this.eName,
      email: this.eEmail,
      subject: this.eSubject,
      message: this.eMessage
    };
    console.log('ayushi payload :', payload);
    this.homeService.sendEmail(payload).subscribe(data => {
      console.log('Data ->', data);
    });
  }
}
