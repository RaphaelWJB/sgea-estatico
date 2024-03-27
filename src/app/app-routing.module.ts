import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomePageComponent } from './demo/components/home/home-page/home-page.component';
 
import { ListarColaboradorComponent } from './demo/components/cadastros/colaborador/listar-colaborador/listar-colaborador.component';
import { NovoColaboradorComponent } from './demo/components/cadastros/colaborador/novo-colaborador/novo-colaborador.component';
import { NovoFornecedorComponent } from './demo/components/cadastros/fornecedor/novo-fornecedor/novo-fornecedor.component';
import { ListarFornecedorComponent } from './demo/components/cadastros/fornecedor/listar-fornecedor/listar-fornecedor.component';
import { ListarClienteComponent } from './demo/components/cadastros/cliente/listar-cliente/listar-cliente.component';
import { NovoClienteComponent } from './demo/components/cadastros/cliente/novo-cliente/novo-cliente.component';
import { ListarProdutosComponent } from './demo/components/cadastros/produtos/listar-produtos/listar-produtos.component';
import { NovoProdutoComponent } from './demo/components/cadastros/produtos/novo-produto/novo-produto.component';
 
import { ListarFaturaComponent } from './demo/components/entrada_de_informacoes/listar-fatura/listar-fatura.component';
import { NovaFaturaComponent } from './demo/components/entrada_de_informacoes/nova-fatura/nova-fatura.component';
import { ListarVendaComponent } from './demo/components/entrada_de_informacoes/listar-venda/listar-venda.component';
import { NovaVendaComponent } from './demo/components/entrada_de_informacoes/nova-venda/nova-venda.component';
import { ProdutoComponent } from './demo/components/extrato/listarRelatorio/produto/produto.component';
import { ClienteComponent } from './demo/components/extrato/listarRelatorio/cliente/cliente.component';
import { ColaboradorComponent } from './demo/components/extrato/listarRelatorio/colaborador/colaborador.component';
import { FinanceiroComponent } from './demo/components/extrato/listarRelatorio/financeiro/financeiro.component';
import AuthSigninComponent from './demo/pages/authentication/auth-signin/auth-signin.component';
import { ComponentDialogComponent } from './demo/components/dialog/component-dialog/component-dialog.component';
 
const routes: Routes = [



  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'loginSGEA',
    component:AuthSigninComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component'),
      },
      {
        path: 'basic',
        loadChildren: () =>
          import('./demo/ui-elements/ui-basic/ui-basic.module').then(
            (m) => m.UiBasicModule,
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./demo/pages/form-elements/form-elements.module').then(
            (m) => m.FormElementsModule,
          ),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./demo/pages/tables/tables.module').then(
            (m) => m.TablesModule,
          ),
      },
      {
        path: 'apexchart',
        loadComponent: () =>
          import('./demo/chart/apex-chart/apex-chart.component'),
      },
      {
        path: 'sample-page',
        loadComponent: () =>
          import('./demo/extra/sample-page/sample-page.component'),
      },
       
      {
        path: 'novoColaborador',
        component: NovoColaboradorComponent
      },  
      {
        path: 'listarColaborador',
        component: ListarColaboradorComponent
      },  
       {
        path: 'listarFornecedor',
        component: ListarFornecedorComponent
       },
      {
        path: 'novoFornecedor',
        component: NovoFornecedorComponent
      },
      {
        path:'listarCliente',
        component:ListarClienteComponent
      },
      {
        path:'novoCliente',
        component: NovoClienteComponent
      },
      {
        path: 'listarProduto',
        component: ListarProdutosComponent
      },
      {
        path: 'novoProduto',
        component: NovoProdutoComponent
      },
      {
        path: 'listarVendas',
        component: ListarVendaComponent
      },
      {
        path: 'novaVenda',
        component: NovaVendaComponent
      },
      {
        path: 'listarFatura',
        component: ListarFaturaComponent
      },
      {
        path:'novaFatura',
        component: NovaFaturaComponent
      },
      {
        path: 'listarRcolaborador',
        component: ColaboradorComponent
      },  
      {
        path: 'listarRcliente',
        component: ClienteComponent
      },
      {
        path:'listarRproduto',
        component: ProdutoComponent
      },
      {
        path:'listarRfinanceiro',
        component: FinanceiroComponent
      },  
           
      
    ],
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./demo/pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
