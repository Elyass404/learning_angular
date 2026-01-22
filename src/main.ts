import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `<input [(ngModel)]="value" type="text" class="border-4 border-blue-900 rounded m-4" />
    <span> {{ value }} and the length is : {{value.length}} </span>`,
})
class App {
  value = 'uuu';
}

bootstrapApplication(App);

//i did not do anything to be honest because i was preparing for the job dating hahah