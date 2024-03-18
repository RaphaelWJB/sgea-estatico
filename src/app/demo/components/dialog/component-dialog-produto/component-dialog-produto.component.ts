import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IProduto } from 'src/app/demo/interface/iproduto';

@Component({
  selector: 'app-component-dialog-produto',
  standalone: true,
  imports: [ MatDialogModule],
  templateUrl: './component-dialog-produto.component.html',
  styleUrl: './component-dialog-produto.component.scss'
})
export class ComponentDialogProdutoComponent implements OnInit{
  ngOnInit(): void {
    this.getData.set(this._data)
  }

  constructor(
    private _dialogRef: DialogRef<ComponentDialogProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProduto,
  ){}

  public openDialog(_data: IProduto): void{}

  public closeModal(){
    this._dialogRef.close()
  }

  public getData = signal<IProduto | null>(null)

  }


 
