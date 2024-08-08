import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home-page.component';
import { SinglebucketComponent } from './single-bucket-page/single-bucket-page.component';

const routes: Routes = [
  {
    path: 'bucket/:id',
    component: SinglebucketComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
