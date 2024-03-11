import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navegação',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Bem Vindo',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item',
      },
    ],
  },
  {
    id: 'ui-element',
    title: 'Registros',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Cadastro',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Fornecedor',
            type: 'item',
            url: '/listarFornecedor',
          },
          {
            id: 'badges',
            title: 'Colaborador',
            type: 'item',
            url: '/listarColaborador',
          },
                    {
            id: 'breadcrumb-pagination',
            title: 'Cliente',
            type: 'item',
            url: '/listarCliente',
          },
          {
            id: 'collapse',
            title: 'Produto',
            type: 'item',
            url: '/listarProduto',
          }
        ],
      },
    ],
  },
  {
    id: 'forms',
    title: 'Entrada de informações',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Vendas',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text',
      },
      {
        id: 'tables',
        title: 'Lançar Faturas',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'feather icon-server',
      },
    ],
  },
  {
    id: 'chart-maps',
    title: 'Acompanhamento',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'apexChart',
        title: 'Graficos',
        type: 'item',
        url: 'apexchart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart',
      },
    ],
  },
  {
    id: 'pages',
    title: 'Informações',
    type: 'group',
    icon: 'icon-pages',
    children: [
      {
        id: 'auth',
        title: 'Relatorios',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'colaborador',
            title: 'Colaborador',
            type: 'item',
            url: ' ',
            target: true,
            breadcrumbs: false,
          },
          {
            id: 'cliente',
            title: 'Cliente',
            type: 'item',
            url: ' ',
            target: true,
            breadcrumbs: false,
          },
          {
            id: 'produto',
            title:'Produto',
            type:'item',
            url:' ',
            target:true,
            breadcrumbs: false,
          },
          {
            id: 'financeiro',
            title:'Financeiro',
            type:'item',
            url:' ',
            target:true,
            breadcrumbs: false,
          }
        ],
      },
     ],
  },
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
