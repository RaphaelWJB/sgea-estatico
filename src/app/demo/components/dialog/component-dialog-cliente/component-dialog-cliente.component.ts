 
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject,OnInit,signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Icliente } from 'src/app/demo/interface/Icliente';

@Component({
  selector: 'app-component-dialog-cliente',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './component-dialog-cliente.component.html',
  styleUrl: './component-dialog-cliente.component.scss'
})
export class ComponentDialogClienteComponent implements OnInit {

 constructor( 
  private _dialogRef: DialogRef<ComponentDialogClienteComponent>,
  @Inject(MAT_DIALOG_DATA) private _data: Icliente){}
  
  ngOnInit(): void {this.getData.set(this._data)}

  public closeDialog(){
    this._dialogRef.close()
  }

  public openModal(data: Icliente | null):void {}

  public getData = signal<Icliente | null>(null)



 
   
}
