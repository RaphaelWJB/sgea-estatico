import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
 
import { Icolaborador } from 'src/app/demo/interface/Icolaborador';

@Component({
  selector: 'app-component-dialog-colaborador',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './component-dialog-colaborador.component.html',
  styleUrl: './component-dialog-colaborador.component.scss'
})
export class ComponentDialogColaboradorComponent implements OnInit{

  constructor( 
    private _dialogRef: MatDialogRef<ComponentDialogColaboradorComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: Icolaborador){}

  ngOnInit(): void {
    this.getData.set(this._data)
  }

    #dialog: MatDialog;

    public openModal(data: Icolaborador): void{}

    public closeModal () {
      this._dialogRef.close()
    }

    public getData = signal<Icolaborador | null>(null)
    





}
