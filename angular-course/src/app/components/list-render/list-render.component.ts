import { Component } from '@angular/core';
import {Animal} from '../../Animal'
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  animals = [
    {name: 'Tom', type: 'Cat'},
    {name: 'Bud', type: 'Dog'},
    {name: 'Bob', type: 'Horse'}
  ]
  /*
  animalObjects: Animal[] = [
    {name: 'Tom', type: 'Cat', age: 12},
    {name: 'Bud', type: 'Dog', age: 10},
    {name: 'Bob', type: 'Horse', age: 45}
  ]
  */
  animalObjects: Animal[] = [];

  animalAge = ''
  showAge(animal: Animal) {
    this.animalAge = `${animal.name} is ${animal.age} years old`
  }

  remove(animal: Animal) {
    this.animalObjects = this.animalObjects.filter((a) => a.id !== animal.id)
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animalObjects = animals));
  }
}
