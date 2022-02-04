import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomersModule } from './modules/customers/customers.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customers', loadChildren: () => CustomersModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
