import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  img = ['codeImg.jpg', 'styleImg.jpg', 'workImg.jpg'];
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
