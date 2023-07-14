import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [];

  public onDeleteCharacter(id:string):void {
  //TO DO
    console.log(id);
    this.onDeleteId.emit(id);

  }


}
