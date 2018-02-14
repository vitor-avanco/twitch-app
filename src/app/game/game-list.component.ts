import { Component, OnInit } from "@angular/core";
import { DeviceDetectorService} from 'ngx-device-detector';
import { Game } from "./game.model";
import { GameService } from "./game-service";
import * as $ from 'jquery';

@Component({
  selector: "all-list",
  moduleId: module.id,
  templateUrl: "./game-list.component.html",
})
export class GameListComponent implements OnInit {
  game: Game[];
  gameTotal: Game[];
  dispositivo;
  paginacao;
  constructor(private gameService: GameService, private deviceService: DeviceDetectorService) {
    this.dispositivo = this.checkDevice();
  }

  order: string = 'popularity';
  reverse: boolean = false;

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  onScroll () {
    
    if(this.game.length < this.gameTotal.length){  
      let len = this.game.length;
      let valorInicial = this.game.length;
      for(var i = len; i <= len+valorInicial; i++){
        this.game.push(this.gameTotal[i]);
      }
      let jogos = this.game;
      jogos = jogos.slice(valorInicial, i-1);
      jogos.map(function(item){

        let objeto = '<div class="col-6 col-sm-4 col-md-3"> <a ng-reflect-router-link="/details,'+item['id']+'" href="/details/'+item['id']+'"> <img class="img-fluid" src="'+item['image']+'"> <div class="info"><h2>'+item['name']+'</h2> <p> '+item['viewers']+' estão assistindo </p> </div</a> </div>'; 
        $('.search-results').append(objeto);
      })
    } 
  }

  deviceInfo = null;
  checkDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    return this.deviceInfo.device;
  }

  ngOnInit() {
      if(this.dispositivo == "iphone" || this.dispositivo == "android"){
        this.paginacao = 25;
      }else if(this.dispositivo == "ipad"){
        this.paginacao = 50;
      }else{
        this.paginacao = 100;
      }
      this.gameService.list2().subscribe((game) => {
      this.gameTotal = game;
      this.game = game.slice(0,this.paginacao);
      })
  }
}