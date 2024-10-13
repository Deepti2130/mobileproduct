import { Component, OnInit } from '@angular/core';
import { Imobile } from '../../model/mobile';
import { mobileProduct } from '../../const/mobile';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
 mobileData : Array<Imobile> = []
  constructor() { }

  ngOnInit(): void {
  this.mobileData =mobileProduct;
  }

}
