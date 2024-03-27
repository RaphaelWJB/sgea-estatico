import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduto } from 'src/app/demo/interface/iproduto';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EdialogPanelClass } from 'src/app/demo/enum/EdialogPanelClass.enum';
import { ComponentDialogProdutoComponent } from '../../../dialog/component-dialog-produto/component-dialog-produto.component';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';
 

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [RouterLink, CommonModule, MatDialogModule],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.scss'
})
export class ListarProdutosComponent implements OnInit{

  constructor(private apiService: ApiService){}
  ngOnInit(): void { this.getDadosProdutos() }
 
  produtos: any[];

  getDadosProdutos(){
    this.apiService.getDadosProduto().subscribe(
      (data: any[]) => {
        this.produtos = data;
        console.log('Dados recebidos:', this.produtos);
      }, (error) => {
        console.log('Erro neste TS', error);
      }
    )
  }






















  public arrayProdutos = signal<IProduto[]>([
    {
      codigo: 2,
      produto: 'Oleo de motor',
      marca: 'grid',
      qtde_estoque: 220,
      tipo: 'LT',
      categoria: 'perecível',
      data_de_vencimento: '	25/07/2024',
      fornecedor: 'Comando'


    },
    {
      codigo: 6,
      produto: 'Vira brequim',
      marca: 'Bosch',
      qtde_estoque: 3,
      tipo: 'PEÇA',
      categoria: 'vida útil',
      data_de_vencimento: '	NAO DISPONIVEL',
      fornecedor: 'Ancora'


    }
  ])


   #dialog = inject(MatDialog);

  public openDialog(data: IProduto){
    this.#dialog.open(ComponentDialogProdutoComponent,{
      width: '750px',
      height: '570px',
      data,
      position: { top: '-50%', left: '40%' },
      panelClass: EdialogPanelClass.PROJECTS
    })
  }


}
