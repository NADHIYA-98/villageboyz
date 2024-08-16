import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  colorHome: any;
  colorPortfolio: any;
  colorPackages: any;
  colorContactUs: any;
  colorServices: any;
  colorAboutUs: any;
  showMobileHeader: boolean = false;
  constructor (private router: Router){}

  ngOninit() {
    // this.colorHome = "var(--ast-global-color-0)";
    // this.changeColor('home');
  }

//   changeColor(routeType : any){
//     debugger;
//     console.log("routeType", routeType)
//     if (routeType == "home") {
//          this.colorHome = "var(--ast-global-color-0)";
//          this.colorPortfolio = "var(--ast-global-color-2);"
//          this.colorPackages = "var(--ast-global-color-2);"
//          this.colorContactUs = "var(--ast-global-color-2);"
//          this.colorServices = "var(--ast-global-color-2);"
//          this.colorAboutUs = "var(--ast-global-color-2);"
//        }
//     else if(routeType == "portfolio") {
//       this.colorPortfolio = "var(--ast-global-color-0)";
//       this.colorHome = "var(--ast-global-color-2);"
//       this.colorPackages = "var(--ast-global-color-2);"
//       this.colorContactUs = "var(--ast-global-color-2);"
//       this.colorServices = "var(--ast-global-color-2);"
//       this.colorAboutUs = "var(--ast-global-color-2);"
//     }

//     else if(routeType == "packages") {
//       this.colorPackages = "var(--ast-global-color-0)";
//       this.colorHome = "var(--ast-global-color-2);"
//       this.colorPortfolio = "var(--ast-global-color-2);"
//       this.colorContactUs = "var(--ast-global-color-2);"
//       this.colorServices = "var(--ast-global-color-2);"
//       this.colorAboutUs = "var(--ast-global-color-2);"
//     }

//     else if(routeType == "contactUs") {
//       this.colorContactUs = "var(--ast-global-color-0)";
//       this.colorHome = "var(--ast-global-color-2);"
//       this.colorPortfolio = "var(--ast-global-color-2);"
//       this.colorPackages = "var(--ast-global-color-2);"
//       this.colorServices = "var(--ast-global-color-2);"
//       this.colorAboutUs = "var(--ast-global-color-2);"
//     }

//     else if(routeType == "services") {
//       this.colorServices = "var(--ast-global-color-0)";
//       this.colorHome = "var(--ast-global-color-2);"
//       this.colorPortfolio = "var(--ast-global-color-2);"
//       this.colorPackages = "var(--ast-global-color-2);"
//       this.colorContactUs = "var(--ast-global-color-2);"
//       this.colorAboutUs = "var(--ast-global-color-2);"
//     }
//     else if(routeType == "aboutUs") {
//       this.colorAboutUs = "var(--ast-global-color-0)";
//       this.colorHome = "var(--ast-global-color-2);"
//       this.colorPortfolio = "var(--ast-global-color-2);"
//       this.colorPackages = "var(--ast-global-color-2);"
//       this.colorServices = "var(--ast-global-color-2);"
//       this.colorContactUs = "var(--ast-global-color-2);"
//     }
    
//  }

mobileToggle()
{
  console.log("show toggle")
  this.showMobileHeader = true;
}
}
