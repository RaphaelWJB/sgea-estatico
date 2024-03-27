import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';

@Component({
  selector: 'app-listar-fatura',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar-fatura.component.html',
  styleUrl: './listar-fatura.component.scss'
})
export class ListarFaturaComponent implements OnInit{
  
  fatura: any[];

  constructor(private apiService : ApiService){}
  ngOnInit(): void { this.carregarDadosFatura()}


  carregarDadosFatura(){
    this.apiService.getDadosFatura().subscribe(
      (data: any[]) => {

        this.fatura = data;
        console.log("Dados capturados", this.fatura);
      });
       }
 
 
 

  

}
