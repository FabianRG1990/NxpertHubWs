import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';

interface State {
  estadoS: string;
  estadoN: number;
  estadoBoolean: boolean;
}

@Injectable()
export class componentStore extends ComponentStore<State> {
  constructor() {
    super({
      estadoS: 'Valor por defecto',
      estadoN: 0,
      estadoBoolean: false
    });
  }

  readonly estadoS$ = this.select((state) => state.estadoS);
  readonly estadoN$ = this.select((state) => state.estadoN);
  readonly estadoBoolean$ = this.select((state) => state.estadoBoolean);

  readonly updateEstadoS = this.updater((state) => ({
    ...state,
    estadoS: 'Actualizado'
  }));

  readonly updateEstadoN = this.updater((state) => ({
    ...state,
    estadoN: 2525
  }));

  readonly updateEstadoBoolean = this.updater((state) => ({
    ...state,
    estadoBoolean: true
  }));

  readonly updateAll = this.updater((state) => ({
    ...state,
    estadoS: 'Actualizado en conjunto',
    estadoN: 999,
    estadoBoolean: false
  }));

  readonly resetState = this.updater((state) => ({
    ...state,
    estadoS: 'Valor por defecto',
    estadoN: 0,
    estadoBoolean: false
  }));
}
