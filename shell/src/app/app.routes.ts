import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login.page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => import('flights/Module').then((m) => m.FlightsModule),
  // },
  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'flights',
        exposedModule: './Module',
      })
        .then((m) => m.FlightsModule)
        .catch((err) => console.error(err)),
  },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('cart/Home').then((m) => m.HomeModule),
  // },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'cart',
        exposedModule: './Home',
      })
        .then((m) => m.HomeModule)
        .catch((err) => console.error(err)),
  },
  {
    path: 'users',
    component: LoginPageComponent,
  },
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'users',
        exposedModule: './Users',
      })
        .then((m) => m.UsersModule)
        .catch((err) => console.error(err)),
  },
  {
    path: 'test-page',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'user',
        exposedModule: './LoginForm',
      })
        .then((m) => m.LoginForm)
        .catch((err) => console.error(err)),
  },
];
