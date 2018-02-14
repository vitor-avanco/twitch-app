import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";
import { Observable } from 'rxjs'; 
import { Game } from "./game.model";

@Injectable()
export class GameService {
  constructor(private http: Http) { }

  list2(){
    let headers = new Headers();
    headers.append("Client-ID", "kydxxgvw5sit0j9yon9230g7ir7ysb");

    return this.http.get("https://api.twitch.tv/kraken/games/top?limit=100", {
      headers: headers
    }).map(resposta => {
      let res = resposta.json();
      res = res.top;
      let allGame = [];

      res.forEach((entry) => {
        let game = new Game();
        game.name = entry.game.name;
        game.id = entry.game._id;
        game.image = entry.game.box.large;
        game.channels = entry.channels;
        game.viewers = entry.viewers;
        game.popularity = entry.game.popularity;
        allGame.push(game);
      });
      return allGame;
    })
  }

  list() {
    let headers = new Headers();
    headers.append("Client-ID", "kydxxgvw5sit0j9yon9230g7ir7ysb");

    return this.http.get("https://api.twitch.tv/kraken/games/top?limit=100", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      data = data.top;
      let allGame = [];

      data.forEach((entry) => {
        let game = new Game();
        game.name = entry.game.name;
        game.id = entry.game._id;
        game.image = entry.game.box.large;
        game.channels = entry.channels;
        game.viewers = entry.viewers;
        game.popularity = entry.game.popularity;
        allGame.push(game);
      });

      return allGame;
    })
  }
  
}