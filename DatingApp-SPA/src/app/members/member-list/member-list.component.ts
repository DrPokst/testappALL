import { Component, OnInit } from '@angular/core';
import {Components} from '../../_models/components'
import { AlertifyService } from '../../_services/alertify.service';
import { ComponentService } from '../../_services/component.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  components: Components[];

  constructor(private componentService: ComponentService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.components = data['components'];
    });
  }

 /* loadComponents(){
    this.componentService.getComponents().subscribe((components: Components[]) => {
      this.components = components;
    }, error => {
      this.alertify.error(error);
    })
  }*/
}
