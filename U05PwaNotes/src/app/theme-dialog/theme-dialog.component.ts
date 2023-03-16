import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../themes/themes.component';
import { db } from '../shared/database';

@Component({
  selector: 'no-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrls: ['./theme-dialog.component.scss']
})
export class ThemeDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ThemeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    db.getThemeByDescription(this.data.data).then(
      result => {
        db.deleteTheme(result).then(_res => console.log("Theme deleted"))
      }
    )
    .catch(err => console.error(err))
    this.dialogRef.close();
  }
}
