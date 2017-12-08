import {Component} from '@angular/core';
import {Child} from './child.model';
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Children For Cookies</h1>
    <p>Here at children for cookies, we relish the oppertunity to squeeze those children dry, and steal ALL OF THE COOKIES. It is what we enjoy the mostest.</p>
    <label>Add a Child?</label>
    <add-child (newChildSender)="addChild($event)"></add-child>
    <child-list [childChildList]="masterChildList"></child-list>
  </div>
  `
})

export class AppComponent {
  masterChildList: Child[] = [
    new Child('Barry', 9, 'street urchin', 26),
    new Child('Alawishes', 11, 'cookie smuggler', 3)
  ];

addChild(child) {
  this.masterChildList.push(child);
}

}
