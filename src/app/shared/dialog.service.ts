import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletebucketComponent } from '../Deletebucket/deletebucket.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
   constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg:any){
    return this.dialog.open(DeletebucketComponent,{
      width: '390px',
      panelClass:'confirm-dialog-container',
      disableClose: true,
      data:{
        message: msg
      }
    });
  }
}
