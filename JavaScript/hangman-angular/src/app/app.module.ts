import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { WordInputComponent } from './components/game/word-input/word-input.component';
import { WrongLettersComponent } from './components/game/wrong-letters/wrong-letters.component';
import { FigureComponent } from './components/game/figure/figure.component';
import { EndGameModalComponent } from './components/game/end-game-modal/end-game-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    WordInputComponent,
    WrongLettersComponent,
    FigureComponent,
    EndGameModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      progressBar: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
