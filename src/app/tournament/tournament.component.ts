import { Component, OnInit } from '@angular/core';
import { Player } from '../api/player';
import { Tournament } from '../api/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  public tournament: Tournament;

  public chris: Player;
  public timo: Player;
  public julien: Player;
  public flo: Player;
  public bene: Player;

  constructor() { }

  ngOnInit() {
  }

  update(team) {

  }

  updateResult(matchResult) {

  }
}
