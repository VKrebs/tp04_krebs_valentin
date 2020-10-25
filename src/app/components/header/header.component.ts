import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { BasketState } from "../../shared/states/basket-state";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nbItemsInBasket: Observable<number>;

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.nbItemsInBasket = this.store.select(BasketState.getNbProductsInBasket);
  }
}
