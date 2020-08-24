import { Component, HostListener, AfterContentChecked } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { StoreService } from './store.service';
import { checkWin } from './helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentChecked {
  title = 'hangman';
  constructor(public store: StoreService, private toastr: ToastrService) {}

  ngAfterContentChecked() {
    if (this.store.playable) {
      const checkWinStatus = checkWin(
        this.store.correctLetters,
        this.store.wrongLetters,
        this.store.selectedWord
      );

      if (checkWinStatus === 'win') {
        this.store.playable = false;
        this.store.msg = 'Congratulations, You Have Won!';
        document.getElementById('endGameModalBtn').click();
      } else if (checkWinStatus === 'lose') {
        this.store.playable = false;
        this.store.msg = `You Lost, Correct Word: ${this.store.selectedWord}`;
        document.getElementById('endGameModalBtn').click();
      }
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const letter: string = event.key.toLowerCase();

    if (this.store.playable) {
      if (this.store.selectedWord.includes(letter)) {
        if (!this.store.correctLetters.includes(letter)) {
          this.store.addCorrectLetter(letter);
        } else {
          this.showPopUp(
            'You have already entered this letter',
            'Duplicate Word'
          );
        }
      } else {
        if (!this.store.wrongLetters.includes(letter)) {
          this.store.addWrongLetter(letter);
        } else {
          this.showPopUp(
            'You have already entered this letter',
            'Duplicate Word'
          );
        }
      }
    }
  }

  showPopUp(msg: string, title: string) {
    this.toastr.info(msg, title);
  }
}
