import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../../store.service';

@Component({
  selector: 'app-end-game-modal',
  templateUrl: './end-game-modal.component.html',
  styleUrls: ['./end-game-modal.component.css'],
})
export class EndGameModalComponent implements OnInit {
  constructor(public store: StoreService) {}

  public restartGame() {
    this.store.resetTheWord();
  }

  ngOnInit(): void {}
}
