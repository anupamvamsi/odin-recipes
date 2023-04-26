import { Component } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.css'],
})
export class BacktopComponent {
  // https://stackoverflow.com/questions/68973719/how-to-make-scroll-to-top-button-appear-after-scrolling-in-angular
  windowScrolled = false;

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
