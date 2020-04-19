import { Component, OnInit, Input } from '@angular/core';
import { Components } from 'src/app/_models/components';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ComponentService } from 'src/app/_services/component.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component-edit2',
  templateUrl: './component-edit2.component.html',
  styleUrls: ['./component-edit2.component.css']
})
export class ComponentEdit2Component implements OnInit {
  @Input() components: Components;
  editForm: NgForm;
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, 
    private componentsService: ComponentService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.components = data['components'];
    });
  }
  updateComponents() {
    this.componentsService.updateComponent(this.components.id, this.components).subscribe(next => {
      this.alertify.success('Pakeista sekmingai');
      this.editForm.reset(this.components);
    }, error => {
      this.alertify.error(error);
    });
    
  }
}
