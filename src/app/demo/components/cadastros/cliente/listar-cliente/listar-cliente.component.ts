import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icliente } from 'src/app/demo/interface/Icliente';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EdialogPanelClass } from 'src/app/demo/enum/EdialogPanelClass.enum';
import { ComponentDialogClienteComponent } from '../../../dialog/component-dialog-cliente/component-dialog-cliente.component';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';


@Component({
  selector: 'app-listar-cliente',
  standalone: true,
  imports: [RouterLink, CommonModule, MatDialogModule],
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.scss'
})
export class ListarClienteComponent implements OnInit{
  ngOnInit(): void {this.carregarClientes();}

  constructor (private apiService: ApiService){}

  clientes: any[];

  carregarClientes(){
    this.apiService.getDadosCliente().subscribe(
      (data: any[]) => {
        this.clientes = data;
      }, error => {
        console.log('Erro ao receber dados:', error);
      }
    )
  }




 




  public arrayCliente = signal<Icliente[]>([
    {
      nome: 'MARIA ANTONIA OLIVEIRA',
      cpf: '123.456.789.10',
      dataNscto: '10.05.1986',
      telefone: '(61) 99785-8975',
      email: 'mariaantonia@gmail.com',
      bairro: 'Jardim das Oliveiras',
      cidade: 'Águas lindas',
      estado: 'GO',
      numero: 26,
      complemento: 'Atrás do ForLove',
      situacao: 'ativo'
    }
  ])

  #dialogRef = inject(MatDialog)

  public openDialog(data: Icliente){
    this.#dialogRef.open(ComponentDialogClienteComponent,{
      data,
      width: '750px',
      height: '600px',
      position: { top: '-50%', left: '40%' },
      panelClass: EdialogPanelClass.PROJECTS
      
    })
  }


  public excluirCliente(index: number){
    this.arrayCliente().slice(index)
  }



}
