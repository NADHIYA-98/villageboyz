import { Component } from '@angular/core';
import { Image } from "../../models/image.model";

@Component({
  selector: 'app-background-image-change',
  templateUrl: './background-image-change.component.html',
  styleUrl: './background-image-change.component.css'
})
export class BackgroundImageChangeComponent {
  actualImage: string = '';
  changeBackgroundCounter = 0;
  actualImageDescription: string = '';
   images: Image[] = [
    {
      imageDesciption: "Capturing beauty on a budget!!Quality photography, budget-friendly prices.",
      image:
        "./assets/wp-content/uploads/Home-page-pics/background-Image/Image1.jpeg"
    },
   {
     imageDesciption: "Marriages are made in heaven, celebrated on land witnessed by photographers.",
     image:
       "./assets/wp-content/uploads/Home-page-pics/background-Image/Image2.jpg"
   },
   {
     imageDesciption: "Framing Love & Beyond",
     image:
       "./assets/wp-content/uploads/Home-page-pics/background-Image/Image3.jpg"
   },
   {
    imageDesciption: "Candid's are raw, but Candid photography is an art of perfection",
    image:
      "./assets/wp-content/uploads/Home-page-pics/background-Image/Image4.JPG"
  },
  {
    imageDesciption: "Embarcing the journey of love, one frame at a time",
    image:
      "./assets/wp-content/uploads/Home-page-pics/background-Image/Image5.JPG"
  }
 ];

 getImages() {
   return this.images.slice();
 }


 constructor() {}

 ngOnInit() {
  debugger;
   this.images = this.getImages();
   this.actualImage = this.images[0].image;
   this.actualImageDescription = this.images[0].imageDesciption;
   setInterval(() => {
     this.changeBackgroundCounter++;
     if (this.changeBackgroundCounter > this.images.length - 1) {
       this.changeBackgroundCounter = 0;
     }
     this.actualImage = this.images[this.changeBackgroundCounter].image;
     this.actualImageDescription = this.images[this.changeBackgroundCounter].imageDesciption;
   }, 2000);
 }


}
