import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/_services/component.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Reels } from 'src/app/_models/Reels';
import { ReelService } from 'src/app/_services/reel.service';

@Component({
  selector: 'app-reels-list',
  templateUrl: './reels-list.component.html',
  styleUrls: ['./reels-list.component.css']
})
export class ReelsListComponent implements OnInit {
  reels: Reels[];

  constructor(private reelService: ReelService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadReels();
    }
  
  loadReels(){
    this.reelService.getReels().subscribe((reels: Reels[]) => {
      this.reels = reels;
    }, error => {
      this.alertify.error(error);
    });
  }

}
