import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { CompareService } from 'src/app/_services/compare.service';
import { Reels } from 'src/app/_models/Reels';
import { IsLoadingService } from '@service-work/is-loading';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usedreel-list',
  templateUrl: './usedreel-list.component.html',
  styleUrls: ['./usedreel-list.component.css'],
})
export class UsedreelListComponent implements OnInit {
  reels: Reels[];
  reels2: Observable<Reels[]>;
  suma: number = 0;
  ilgis: number = 0;
  loading = true;

  constructor(private alertify: AlertifyService, private route: ActivatedRoute, private compareService: CompareService, private isLoadingService: IsLoadingService) { }
  

  ngOnInit() {
    

  }

  loadComparedReels(){
    

    this.compareService.getCompare(this.route.snapshot.params['id']).subscribe((reels: Reels[]) => {
      this.reels = reels;

      for (let index = 0; index < this.reels.length; index++) {
        const element = this.reels[index];
        this.suma = this.suma + element.qty;
        console.log(this.suma);
      }
      this.ilgis = this.reels.length;
      this.loading = false;
      
    }, error => {
      this.alertify.error(error);
    });

    



   
    
  }
  
}
