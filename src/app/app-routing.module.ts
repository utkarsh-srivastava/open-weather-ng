import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { ListingComponent } from './listing/listing.component'

const routes: Routes = [
  { path: 'listings', component: ListingsComponent},
  { path: 'details/:name', component: ListingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
