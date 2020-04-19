import { Component, OnInit, Input } from '@angular/core';
import { ComponentService } from 'src/app/_services/component.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Components } from 'src/app/_models/components';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { CompareService } from 'src/app/_services/compare.service';
import { Subscriber } from 'rxjs';
import { Reels } from 'src/app/_models/Reels';
import { ReelsListComponent } from 'src/app/Reels/reels-list/reels-list.component';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css']
})
export class ComponentDetailComponent implements OnInit {
  components: Components;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  reels: Reels[];


  // tslint:disable-next-line: max-line-length
  constructor(private componentService: ComponentService, private alertify: AlertifyService, private route: ActivatedRoute, private compareService: CompareService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.components= data['components'];
    });
    

    this.galleryOptions = [
      {
          width: '500px',
          height: '500px',
          imagePercent: 100,
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

    this.galleryImages = this.getImages();

  }

  loadComponent(){
    this.componentService.getComponent(this.route.snapshot.params['id']).subscribe((components: Components) =>{
      this.components = components;
    }, error => {
      this.alertify.error(error);
    });
  }
  
  getImages(){
    const imageUrls = [];
    for (const photo of this.components.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
        description: photo.description
      });
    }
    return imageUrls;
  }

  
  
  printf(){
    window.print();
  }

  
  
}
