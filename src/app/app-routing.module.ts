import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { SpotDeletionComponent } from './spot-deletion.component';

import { SpotDeletionRowComponent } from './spot-deletion-row/spot-deletion-row.component';

const routes: Routes = [
  { path: '', component: SpotDeletionRowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
