import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string ='iroman';
  public edad:number = 41;

  get capitalizadName ():string {
    return this.name.toUpperCase();
  }

  getHeroDescription ():string {
    return `${this.name}-${this.edad}`
  }

  changeHeroName ():void {
    this.name = 'Spierman';
  }
  changeHeroAge ():void {
    this.edad = 15;
  }
  resetHeroe ():void {
    this.edad = 45;
    this.name = 'iroman';
  }
}
