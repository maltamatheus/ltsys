import { Component, OnInit } from '@angular/core';
import { InteressadosService } from 'src/app/services/interessados.service';
import { Interessado } from 'src/models/interessado.model';
import { Pessoa } from 'src/models/pessoa.model';

@Component({
  selector: 'app-consulta-interessados',
  templateUrl: './consulta-interessados.component.html',
  styleUrls: ['./consulta-interessados.component.css']
})
export class ConsultaInteressadosComponent implements OnInit{
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
