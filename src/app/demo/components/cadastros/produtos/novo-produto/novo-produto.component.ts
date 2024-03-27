import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-novo-produto',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.scss'
})
export class NovoProdutoComponent implements OnInit {
  
  fornecedor = [];

  constructor(private apiService: ApiService ){}
  ngOnInit(): void {
     this.getDadosFornecedor();
  }

  public alerta() {
    return alert("Produto adicionado!")
  }

  getDadosFornecedor(){
    return this.apiService.getDadosFornecedor().subscribe(
      (data: any[]) => {
        this.fornecedor = data;
        console.log(this.fornecedor);
      },
      (error) => {
        console.log('Erro neste ts!');
      }
    )
  }



  




}
