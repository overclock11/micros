import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public message: string;
  private count: number = 0;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }
  updateMessage() {
    this.message = 'Actualizando mensaje numero ' + this.count++;
    console.log(this.message);
    this.cd.markForCheck();
    setTimeout(()=>{this.cd.detectChanges();},2000);
  }

}
