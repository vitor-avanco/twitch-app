import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Game } from "./game.model";
import { GameService } from "./game-service";

import { GameInterface } from "./game-interface";

@Component({
  selector: "app-details",
  moduleId: module.id,
  templateUrl: "./game-detail.component.html",
})



export class GameDetailComponent implements OnInit {
    detail: GameInterface;
    constructor(private gameService:GameService, private route: ActivatedRoute) {}

    getObjects(obj, key, val) {
        var objects = []
        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) continue;

            if (typeof obj[i] == 'object') {
                objects = objects.concat(
                    this.getObjects(obj[i], key, val)
                );
            } else if (i == key && obj[key] == val) {
                objects.push(obj);
            }
        }
        return objects;
    }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.gameService.list2().subscribe((game) => {
        let lista = this.getObjects(game, 'id', id);
        this.detail = lista[0];
    })
  }
}