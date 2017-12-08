import { Component, Output, EventEmitter} from '@angular/core';
import { Child } from './child.model';

@Component({
  selector: 'add-child',
  template: `
  <input #child>
  <input #childAge>
  <input #lifeStory>
  <input #cookieCount>
  <button (click)="childAddChild(child.value, childAge.value, lifeStory.value, cookieCount.value)">Add Child</button>
`})

export class NewChildComponent {
  @Output() newChildSender = new EventEmitter();

  childAddChild(name: string, age: number, story: string, cookieCount: number){
    var child: Child = new Child(name, age, story, cookieCount);
    this.newChildSender.emit(child);
  }

}
