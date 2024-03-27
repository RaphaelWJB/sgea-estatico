import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private apiUrl = 'http://localhost:4000';
 
  constructor(private http: HttpClient) { }

  //Listagem de fornecedores!
  getDadosFornecedor():Observable<any[]>{
    //  console.log('O que está retornando:', this.apiUrl)
      return this.http.get<any[]>(this.apiUrl);
  }

  
  //Listagem de colaboradores!
  getDadosColaborador():Observable<any[]>{
    //  console.log('O que está retornando:', this.apiUrl)
      return this.http.get<any[]>(this.apiUrl + "/colaborador");
  }

  //Listagem de clientes!
  getDadosCliente ():Observable<any[]>{
  return this.http.get<any[]>(this.apiUrl + '/cliente');
  }

  //Listagem de faturas!
  getDadosFatura():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/fatura')
  }


  getDadosProduto():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + '/produto');
  }

  


    




}
