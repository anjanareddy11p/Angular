import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HelloWorldService } from '../service/hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  public str:any;
  constructor(private serv1:HelloWorldService) {}
   ngOnInit():void{
     this.serv1.getData().subscribe(response => {
       this.str=response;
       console.log(this.str);
      }
     )
   }
}
