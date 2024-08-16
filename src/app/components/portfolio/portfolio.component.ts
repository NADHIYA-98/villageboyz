import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.scrollTop();
}

scrollTop()
{
  this.router.events.subscribe((event) => {
    if (!(event instanceof NavigationEnd)) {
        return;
    }
    window.scrollTo(0, 0)
});
}
}
