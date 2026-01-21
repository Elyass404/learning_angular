import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  standalone: true,
  template: `<h2> Hello Mr {{name}}</h2>`
})

class App{

  name: string = "ilyass";

}

bootstrapApplication(App)
