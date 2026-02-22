import { InteressadosService } from './../../services/interessados.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Interessado } from 'src/models/interessado.model';
import { Pessoa } from 'src/models/pessoa.model';


@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.css']
})
export class InteressadosComponent implements OnInit{
  constructor(private interessadosService: InteressadosService){
  }

  ngOnInit(): void {
    this.carregarInteressados();
  }
  displayedColumns: string[] = ['nomeCompleto', 'dataNascto'];
  dataSource: Interessado[] = [];

  carregarInteressados(){
    this.interessadosService.obterInteressados().subscribe(response => {
      let interessados: Interessado[] = [];
      response.forEach(i => {
        let pessoa: Pessoa = {
          nomeCompleto: i.pessoa.nomeCompleto,
          dataNascto: i.pessoa.dataNascto,
        }
        interessados.push({id:i.id,pessoa:pessoa});
      })
      this.dataSource = interessados;
    });
  }
}
