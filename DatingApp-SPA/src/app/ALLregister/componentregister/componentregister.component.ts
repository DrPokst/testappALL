import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ReelService } from 'src/app/_services/reel.service';
import { ComponentService } from 'src/app/_services/component.service';

@Component({
  selector: 'app-componentregister',
  templateUrl: './componentregister.component.html',
  styleUrls: ['./componentregister.component.css']
})
export class ComponentregisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  
  constructor(private reelService: ReelService, private  alertify: AlertifyService, private componentService: ComponentService) { }

  ngOnInit(): void {
  }

  registercomponent(){
    this.componentService.registerComponent(this.model).subscribe(()=>{
      this.alertify.success('sekmingai uzregistruota');
    }, error => {
      this.alertify.error(error);
    });
    console.log(this.model);
  }


  cancel(){
    this.cancelRegister.emit(false);
    console.log('canceled');
  }
}
