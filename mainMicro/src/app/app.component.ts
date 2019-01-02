import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mainMicro';
  public variable: string;

  message(){
    this.variable = 'var lent asdasda';
  }
}
