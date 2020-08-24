import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css'],
})
export class FigureComponent implements OnInit {
  constructor(public store: StoreService) {}

  ngOnInit(): void {}
}
