import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CollectionComponent } from './collection/collection.component';
import { ShoeDetailComponent } from './shoe-detail/shoe-detail.component';



const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '', component: CollectionComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'shoe/:name', component: ShoeDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
