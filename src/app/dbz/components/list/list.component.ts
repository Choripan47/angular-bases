import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name:'Trunks', power: 10
    }
  ]

  onDeleteCharacter(id: string):void{
    this.onDelete.emit(id);
    console.log("Emitiendo index de item seleccionado")
  }

}
