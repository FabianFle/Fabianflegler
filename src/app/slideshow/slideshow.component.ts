import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  img = ['codeImg.jpg', 'styleImg.jpg', 'workImg.jpg'];

  headline = [
    'Lets start with the IT Im full of anticipation',
    'IT has a lot to offer',
    'You are ready when you feel it'
  ];

  currenImg = 0;
  showImg = true

  ngOnInit() {
    this.updateImg();
  }

  updateImg() {
    setInterval(() => {
      this.currenImg++;
      this.currenImg = this.currenImg % this.img.length;
      this.showImg = false;

      setTimeout(() => {
        this.showImg = true;
      }, 10);
    }, 8000);
  }
}
