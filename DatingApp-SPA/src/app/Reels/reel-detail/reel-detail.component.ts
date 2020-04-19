import { Component, OnInit } from '@angular/core';
import { Reels } from 'src/app/_models/Reels';
import { ReelService } from 'src/app/_services/reel.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-reel-detail',
  templateUrl: './reel-detail.component.html',
  styleUrls: ['./reel-detail.component.css']
})
export class ReelDetailComponent implements OnInit {
  reels: Reels;
  constructor(private reelService: ReelService, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.loadReel();

    
  }

  loadReel(){
    this.reelService.getReel(this.route.snapshot.params['id']).subscribe((reels: Reels) =>{
      this.reels = reels;
    }, error => {
      this.alertify.error(error);
    });
  }


}
