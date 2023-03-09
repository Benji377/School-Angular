import { ThemeDialogComponent } from './../theme-dialog/theme-dialog.component';
import { db } from './../shared/database';
import { Component, OnInit } from '@angular/core';
import { Theme } from '../shared/theme';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'no-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent implements OnInit {
  themes_arr!: Theme[];
  theme_desc!: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    db.getThemesByDescription().then(
      result => {
        this.themes_arr = result;
        console.log("Thiss", result);
      }
    )
    .catch(
      error => console.error("OH NO: ", error)
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ThemeDialogComponent, {
      width: '250px',
      data: this.theme_desc
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, ', result);
      this.theme_desc = result;
    });
  }

}
