import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../store.service';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css'],
})
export class WordInputComponent implements OnInit {
  constructor(public store: StoreService) {}

  ngOnInit(): void {}

  changeWord(): void {
    this.store.resetTheWord();
  }
}
