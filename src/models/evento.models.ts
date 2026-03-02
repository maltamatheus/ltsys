import { EventoPK } from "./eventoPk.model";
import { Interessado } from "./interessado.model";

export interface Evento{
  curso: EventoPK,
  valor: number,
  confirmado?:boolean,
  interessados?: Interessado[]
}
