import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';

@Component({
  standalone:true,
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports:[MessageComponent],
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}