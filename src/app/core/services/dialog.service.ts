import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletebucketComponent } from '../../shared/delete-dialogs/components/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: string) {
    return this.dialog.open(DeletebucketComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg,
      },
    });
  }
}
