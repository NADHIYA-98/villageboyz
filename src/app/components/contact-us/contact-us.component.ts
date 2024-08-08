import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  mailID = 'villageboystudioz@gmail.com';
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

