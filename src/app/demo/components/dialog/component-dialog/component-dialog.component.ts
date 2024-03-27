import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, WritableSignal, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IFornecedor } from 'src/app/demo/interface/Ifornecedor';
import { ApiService } from 'src/app/demo/services/serviceFornecedor/api.service';
 
@Component({
  selector: 'app-component-dialog',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './component-dialog.component.html',
  styleUrl: './component-dialog.component.scss'
})
export class ComponentDialogComponent implements OnInit{

  constructor(
    private _dialogRef: MatDialogRef<ComponentDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private _data: IFornecedor,
    private apiService: ApiService)
    {}

    ngOnInit(): void {
    this.getData.set(this._data),
    this.retornaDados();
  }

  fornecedores: any[];



  #dialog: MatDialog;
  
  public getData = signal< IFornecedor | null> (null);
       
  public openDialog(data: IFornecedor): void {}

  public closeModal(){
    this._dialogRef.close();
  }
 
    //Retorna os dados da API!
    public retornaDados(){
      this.apiService.getDadosFornecedor().subscribe(
        (data : any[]) => {
          
          for(const item of data){
            console.log('Dados recebidos:', data);
          }
          this.fornecedores = data;        
         },
        error => {
          console.log('Error neste TS', error);
        }
      );
  }


  
 
   

}

 