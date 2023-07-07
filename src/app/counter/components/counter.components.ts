import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `<h1>Contador</h1>
 <p>{{counter}}</p>
 <button (click)="increaseBt(+1)">+1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBt(-1)">-1</button>

`
})
export class CounterComponent {
  public counter: number = 10;

  increaseBt(value: number): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }
}
