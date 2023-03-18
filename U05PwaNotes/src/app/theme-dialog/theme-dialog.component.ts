import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogData } from '../themes/themes.component';
import { db } from '../shared/database';
import { ThemeValidator } from '../shared/ThemeValidator';

@Component({
  selector: 'no-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrls: ['./theme-dialog.component.scss']
})
export class ThemeDialogComponent implements OnInit {
  themeForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ThemeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.themeForm = this.fb.group({
      theme: [this.data.data, null, ThemeValidator.themeExists(db)]
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    db.getThemeByDescription(this.data.data).then(
      result => {
        db.deleteTheme(result).then(_ => console.log("Theme deleted"))
        .catch(err => alert(`Error: ${err}`))
      }
    )
    .catch(err => {
      console.error(err)
    })
    this.dialogRef.close();
  }
}
