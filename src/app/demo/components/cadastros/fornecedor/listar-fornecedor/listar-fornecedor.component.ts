import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IFornecedor } from 'src/app/demo/interface/Ifornecedor';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { EdialogPanelClass } from 'src/app/demo/enum/EdialogPanelClass.enum';
import { ComponentDialogComponent } from '../../../dialog/component-dialog/component-dialog.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';

@Component({
  selector: 'app-listar-fornecedor',
  standalone: true,
  imports: [RouterLink, MatDialogModule, CommonModule, ComponentDialogComponent, JsonPipe],
  templateUrl: './listar-fornecedor.component.html',
  styleUrl: './listar-fornecedor.component.scss'
    })
export class ListarFornecedorComponent implements OnInit{
  fornecedores: any[];
 
  constructor(private apiService: ApiService ) {}
  ngOnInit(): void {
    console.log('O metodo que foi chamado:', this.carregarFornecedores());
    this.carregarFornecedores();
   } 
   

   //Informação direto do banco de dados!
  carregarFornecedores(){
      this.apiService.getDadosFornecedor().subscribe(
      (data : any[]) => {
       
        this.fornecedores = data;
        console.log('Dados recebidos:', data);
       },
      error => {
        console.log('Error neste TS', error);
      }
    );
  }







  #dialog = inject (MatDialog);

  public arrayFornecedor = signal<IFornecedor[]>([
    {
      nome: 'Matheus Viana',
      cpf: '055.032.101 - 23',
      dataNascto: '02.09.1996',
      telefone: '(61) 99397-5500',
      email:'matheusgoldship@gmail.com',
      bairro: 'Jardim aguas lindas II',
      cidade: 'Aguas Lindas',
      estado: 'GO',
      numero: 26,
      complemento: 'Atrás do Lorival',
      acesso:'Usuario',
      situacao:'Ativo'
    }])

    public openDialog(data: IFornecedor) {
      this.#dialog.open(ComponentDialogComponent,{
        width: '750px',
        height: '870px',
        data,
        position: { top: '-50%', left: '40%' },
        panelClass: EdialogPanelClass.PROJECTS,
      });
    }


  }








 