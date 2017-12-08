import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Child } from './child.model';

@Component({
  selector: 'child-list',
  template: `
  <ul>
    <li *ngFor="let childe of childChildList">{{childe.name}}{{childe.age}}{{childe.lifeStory}}{{childe.cookieCount}}</li>
  </ul>
  `
})

export class ChildListComponent {
  @Input() childChildList: Child[];
}
