import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  private _resultado: number = 0;
  private _numero1: number = 0;
  private _numero2: number = 0;
  public get numero2(): number {
    return this._numero2;
  }
  public set numero2(value: number) {
    this._numero2 = value;
  }

  public get numero1(): number {
    return this._numero1;
  }
  public set numero1(value: number) {
    this._numero1 = value;
  }
  public get resultado(): number {
    return this._resultado;
  }
  public set resultado(value: number) {
    this._resultado = value;
  }

  public sumar(): void{
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  public restar(): void{
    this.resultado = this.numero1 - this.numero2;
  }
}
