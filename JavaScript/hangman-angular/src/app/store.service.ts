import { Injectable } from '@angular/core';
import randomWords from 'random-words';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _selectedWord: string;
  private _correctLetters: string[];
  private _wrongLetters: string[];
  private _playable: boolean;
  private _msg: string;

  constructor() {
    this._selectedWord = randomWords();
    // this._selectedWord = 'hello';
    this._correctLetters = [];
    this._wrongLetters = [];
    this._playable = true;
    this._msg = null;
  }

  public get selectedWord(): string {
    return this._selectedWord;
  }

  public get correctLetters(): string[] {
    return this._correctLetters;
  }

  public get wrongLetters(): string[] {
    return this._wrongLetters;
  }

  public get playable(): boolean {
    return this._playable;
  }

  public get msg(): string {
    return this._msg;
  }

  public set selectedWord(v: string) {
    this._selectedWord = randomWords();
  }

  public set playable(v: boolean) {
    this._playable = v;
  }

  public set msg(v: string) {
    this._msg = v;
  }

  public addCorrectLetter(letter: string) {
    this._correctLetters.push(letter);
  }

  public addWrongLetter(letter: string) {
    this._wrongLetters.push(letter);
  }

  public resetTheWord() {
    this._selectedWord = randomWords();
    this._correctLetters = [];
    this._wrongLetters = [];
    this.playable = true;
    this.msg = null;
  }
}
