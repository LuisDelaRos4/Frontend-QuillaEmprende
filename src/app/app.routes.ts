import { Routes } from '@angular/router';
import { PageModulosyrolesComponent } from './modulosyroles/pages/page-modulosyroles/page-modulosyroles.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageProductosyserviciosComponent } from './productosyservicios/pages/page-productosyservicios/page-productosyservicios.component';
import { PageVentasComponent } from './ventas/pages/page-ventas/page-ventas.component';
import { PageAbonosComponent } from './abonos/pages/page-abonos/page-abonos.component';
import { PageDashboardComponent } from './dashboard/pages/page-dashboard/page-dashboard.component';

export const routes: Routes = [
  // Redirigir la ruta raíz a /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: '',
    component: PageMainComponent,
    children: [
      { path: 'dashboard', component: PageDashboardComponent },
      { path: 'modulosyroles', component: PageModulosyrolesComponent },
      { path: 'productosyservicios', component: PageProductosyserviciosComponent },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.routes').then(m => m.USUARIOS_ROUTES)
      },
      { path: 'ventas', component: PageVentasComponent },
      { path: 'abonos', component: PageAbonosComponent }
    ]
  },
  // Ruta wildcard para manejar rutas no existentes
  { path: '**', redirectTo: '/dashboard' }
];
