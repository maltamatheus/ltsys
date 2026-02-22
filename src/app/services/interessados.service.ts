import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interessado } from 'src/models/interessado.model';

@Injectable({
  providedIn: 'root'
})
export class InteressadosService {

  private readonly HOST = 'http://localhost:8080';
  private readonly API = '/interessados';

  constructor(private http: HttpClient) { }

  obterInteressados(): Observable<Interessado[]>{
    return this.http.get<Interessado[]>(`${this.HOST}${this.API}`);
  }
}
