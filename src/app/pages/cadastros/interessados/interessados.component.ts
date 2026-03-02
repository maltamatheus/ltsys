import { InteressadosService } from '../../../services/interessados.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Interessado } from 'src/models/interessado.model';
import { Pessoa } from 'src/models/pessoa.model';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.css']
})
export class InteressadosComponent implements OnInit{
  constructor(private interessadosService: InteressadosService){
  }

  frmGrpCadInteressados!: FormGroup;

  ngOnInit(): void {
    this.frmGrpCadInteressados = new FormGroup({
      pessoa: new FormControl(null),
      contatos: new FormControl(null),
      documentos: new FormControl(null),
      eventos: new FormControl(null)
    });
  }
}
