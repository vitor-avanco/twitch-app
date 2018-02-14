import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import "rxjs/add/operator/map";
import { FiltroPorTituloPipe } from './filtro-por-titulo.pipe';

import { GameListComponent } from "./game/game-list.component";
import { GameDetailComponent } from "./game/game-detail.component";
import { GameService } from "./game/game-service";

import { DeviceDetectorModule } from 'ngx-device-detector';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderModule,
    InfiniteScrollModule,
    DeviceDetectorModule.forRoot()
  ],
  declarations: [
    AppComponent,
    GameListComponent,
    GameDetailComponent,
    FiltroPorTituloPipe
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
