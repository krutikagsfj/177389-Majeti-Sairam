import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public choosedGame: string;
  public price: number;
  public option: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.choosedGame = this.gameService.getchoosedGame();
    this.price = this.gameService.getprice();
    this.option = this.gameService.getoption();

  }

}
