import { Component, OnInit } from '@angular/core';
import { ConheadersComponent } from './conheaders/conheaders.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  imports:[ConheadersComponent,BodyComponent,FooterComponent],
})
export class ConversationsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
