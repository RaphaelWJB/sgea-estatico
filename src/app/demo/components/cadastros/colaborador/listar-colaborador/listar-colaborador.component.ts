import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icolaborador } from 'src/app/demo/interface/Icolaborador';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { EdialogPanelClass } from 'src/app/demo/enum/EdialogPanelClass.enum';
import { ComponentDialogColaboradorComponent } from '../../../dialog/component-dialog-colaborador/component-dialog-colaborador.component';
  

@Component({
  selector: 'app-listar-colaborador',
  standalone: true,
  imports: [RouterLink, ComponentDialogColaboradorComponent, MatDialogModule],
  templateUrl: './listar-colaborador.component.html',
  styleUrl: './listar-colaborador.component.scss'
})
export class ListarColaboradorComponent {


  public arrayColaborador = signal<Icolaborador[]>([
    {
      nome: 'MATHEUS PEREIRA MACHADO VIANA',
      cpf: '055.032.101-23',
      telefone: '99397-5500',
      dataNascto: '02.09.1996',
      email: 'matheusgoldship@gmail.com',
      endereco: 'QNR 3 Conjunto M Lote 9',
      usuario: 'matheus.viana',
      acesso: 'USUARIO',
      situacao: 'ATIVO' 
  },
  {
    nome: 'RAPHAEL WILKER GOMES LABRADOR',
    cpf: '000.012.141-73',
    telefone: '99658-5520',
    dataNascto: '12.04.1991',
    email: 'raphaelwilker@gmail.com',
    endereco: 'QPO 26 SUL 21',
    usuario: 'raphael.wilker',
    acesso: 'MASTER',
    situacao: 'ATIVO' 
},]) 

#dialog = inject(MatDialog);

public openDialog(data: Icolaborador){
  this.#dialog.open(ComponentDialogColaboradorComponent,{
    data,
    width: '750px',
    height: '500px',
    position: { top: '-50%', left: '40%' },
    panelClass: EdialogPanelClass.PROJECTS
  })
}





}
