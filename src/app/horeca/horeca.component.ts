import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-horeca',
  templateUrl: './horeca.component.html',
  styleUrls: ['./horeca.component.css'],
  providers: [NgbCarouselConfig]
})
export class HorecaComponent {
  images = [
    { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500" },
    { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" }
  ];



  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}
