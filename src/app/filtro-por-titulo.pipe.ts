import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filtroPorTitulo'
})
export class FiltroPorTituloPipe implements PipeTransform {
  transform(game, valor:string){

    valor = valor.toLocaleLowerCase();

    return game.filter(
      item => item.name.toLowerCase().includes(valor)
    );
  }
}
