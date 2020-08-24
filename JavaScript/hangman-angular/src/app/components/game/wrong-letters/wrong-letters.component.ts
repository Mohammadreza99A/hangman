import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../store.service';

@Component({
  selector: 'app-wrong-letters',
  templateUrl: './wrong-letters.component.html',
  styleUrls: ['./wrong-letters.component.css'],
})
export class WrongLettersComponent implements OnInit {
  constructor(public store: StoreService) {}

  ngOnInit(): void {}
}
