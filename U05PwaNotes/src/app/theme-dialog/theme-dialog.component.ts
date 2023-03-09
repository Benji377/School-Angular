import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'no-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrls: ['./theme-dialog.component.scss']
})
export class ThemeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ThemeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
