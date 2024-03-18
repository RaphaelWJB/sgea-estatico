import { Component, Inject, OnInit, WritableSignal, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IFornecedor } from 'src/app/demo/interface/Ifornecedor';
 
@Component({
  selector: 'app-component-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './component-dialog.component.html',
  styleUrl: './component-dialog.component.scss'
})
export class ComponentDialogComponent implements OnInit{

  constructor(
    private _dialogRef: MatDialogRef<ComponentDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private _data: IFornecedor){}
    
    #dialog: MatDialog;
    
    public openDialog(data: IFornecedor): void {}

  public closeModal(){
    this._dialogRef.close();
  }
 
  ngOnInit(): void {
  this.getData.set(this._data)
  }

  public getData = signal< IFornecedor | null> (null);


  
 
   

}

 