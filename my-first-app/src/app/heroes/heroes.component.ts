import { Component } from '@angular/core';
import { NgIf, NgForOf, UpperCasePipe } from '@angular/common'; // Import specific Angular directives and pipes
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [UpperCasePipe], // You can provide UpperCasePipe here if needed
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
