import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit{

  frmGrpCadEventos!: FormBuilder;

  ngOnInit(): void {
    this.frmGrpCadEventos.group({
      evento:[null]
    })
  }
}
