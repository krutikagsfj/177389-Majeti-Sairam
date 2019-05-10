import { Component, OnInit } from '@angular/core';

import { Router } from '../../../node_modules/@angular/router';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
// Exporting the PlayComponent to access it in another components
export class PlayComponent implements OnInit {
  
  public playList: any;
  private price: number;

  constructor(private gameService: GameService,private router: Router) { }

  ngOnInit() {
    this.gameService.getGamesList().subscribe(data => {
      this.playList = data;
      console.log('this.playlist', this.playList);
    });
    this.price = this.gameService.getprice();
  }

  playGame(game) {
  // Checking the amount condition and setting the option to excute in Success Component
   
    if (game.price < this.price) {
      this.gameService.setprice(this.price-(game.price));
      this.gameService.setchoosedGame(game.name);
      this.gameService.setoption('yes');
    } else {
      this.gameService.setchoosedGame(game.name);
      this.gameService.setoption('no');
    }
    this.router.navigate(['success']);
  }


}
