import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-novo-produto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './novo-produto.component.html',
  styleUrl: './novo-produto.component.scss'
})
export class NovoProdutoComponent {
  
  public alerta() {
    return alert("Produto adicionado!")
  }

}
