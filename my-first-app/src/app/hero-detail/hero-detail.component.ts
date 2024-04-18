import {Component, Input} from '@angular/core';
import { UpperCasePipe} from '@angular/common';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [UpperCasePipe]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}