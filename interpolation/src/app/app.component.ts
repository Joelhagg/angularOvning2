import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interpolation';

  firstName: string = 'Joel'
  lastName: string = 'Hägg'
  age: number = 31
  isMerried: boolean = true
}
