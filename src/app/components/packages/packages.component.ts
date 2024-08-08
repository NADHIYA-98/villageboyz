import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    debugger;
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

