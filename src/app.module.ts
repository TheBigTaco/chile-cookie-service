import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewChildComponent } from './addChild.component';
import { ChildListComponent} from './child-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NewChildComponent, ChildListComponent],
  bootstrap: [AppComponent]
})

export class AppModule {}
