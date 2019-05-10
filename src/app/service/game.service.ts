// Service Module for declaring methods along with get and Set functions
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GameService {
  private price:number;
  private choosedGame:string;
  private option:string;


  constructor(private http:HttpClient) {
    this.price = 600;
   }
   dataBaseUrl: string='http://localhost:3000/GameList';

   getGamesList() {
    return this.http.get(this.dataBaseUrl);
  }
  setprice(price) {
    this.price = price;
  }
  getprice() {
    return this.price;
  }
  getchoosedGame() {
    return this.choosedGame;
  }
  setchoosedGame(choosedGame) {
    this.choosedGame = choosedGame;
  }
  setoption(option) {
    this.option = option;
  }
  getoption() {
    return this.option;
  }
}



