import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DeletebucketComponent } from './shared/delete-dialogs/components/delete-dialog/delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SinglebucketComponent } from './single-bucket-page/single-bucket-page.component';
import { StatisticsService } from './core/services/statistics.service';
import { BucketListComponent } from './buckets/components/bucket-list/bucket-list.component';
import { BucketComponent } from './buckets/components/bucket/bucket.component';
import { StatisticsListComponent } from './shared/statistics/components/statistics-list/statistics-list.component';
import { StatisticComponent } from './shared/statistics/components/statistic/statistic.component';
import { BucketHeaderComponent } from './buckets/components/bucket-header/bucket-header.component';
import { TaskListComponent } from './tasks/components/task-list/task-list.component';
import { TasksStateComponent } from './tasks/components/tasks-state/tasks-state.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBucketComponent } from './buckets/components/add-bucket/add-bucket.component';
import { BucketService } from './core/services/bucket.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditBucketComponent } from './buckets/components/edit-bucket/edit-bucket.component';
import { HeaderComponent } from './shared/header/header.component';
import { BucketListHeaderComponent } from './buckets/components/bucket-list/bucket-list-header/bucket-list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    BucketComponent,
    HomeComponent,
    StatisticsListComponent,
    StatisticComponent,
    DeletebucketComponent,
    SinglebucketComponent,
    BucketHeaderComponent,
    TaskListComponent,
    TasksStateComponent,
    AddBucketComponent,
    EditBucketComponent,
    HeaderComponent,
    BucketListHeaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [StatisticsService, BucketService],
  bootstrap: [AppComponent],

})
export class AppModule {}
