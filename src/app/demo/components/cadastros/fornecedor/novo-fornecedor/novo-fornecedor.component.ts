import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IFornecedor } from 'src/app/demo/interface/Ifornecedor';

@Component({
  selector: 'app-novo-fornecedor',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './novo-fornecedor.component.html',
  styleUrl: './novo-fornecedor.component.scss'
})
export class NovoFornecedorComponent {



}
