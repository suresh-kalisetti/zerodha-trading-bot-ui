import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  message: string = "Are you sure?";

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
