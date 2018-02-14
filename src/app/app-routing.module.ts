import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GameListComponent } from "./game/game-list.component";
import { GameDetailComponent } from "./game/game-detail.component";


const routes: Routes = [
  { path: "games", component: GameListComponent },
  { path: "details/:id", component: GameDetailComponent },
  { path: '', redirectTo: "/games", pathMatch: "full"  },
  { path: '**', redirectTo: "/games" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }