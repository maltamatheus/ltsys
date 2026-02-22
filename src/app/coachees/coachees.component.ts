import { Component } from '@angular/core';

@Component({
  selector: 'app-coachees',
  templateUrl: './coachees.component.html',
  styleUrls: ['./coachees.component.css']
})
export class CoacheesComponent {
  
  constructor(){
    type Coachee = {
      nome: string;
      tipoDocumento: string;
      numeroDocumento: string;
      dtNascto: string;
    }
  }
}
