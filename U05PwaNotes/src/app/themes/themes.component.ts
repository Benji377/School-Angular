import { ThemeDialogComponent } from './../theme-dialog/theme-dialog.component';
import { db } from './../shared/database';
import { Component, OnInit } from '@angular/core';
import { Theme } from '../shared/theme';
import { MatDialog } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

export interface DialogData {
  data: string,
  editing: boolean
}

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
        this.themes_arr = result
      }
    )
    .catch(
      error => console.error(error)
    )
  }

  openDialog(theme_des: string | undefined = undefined) {
    const dialogRef = this.dialog.open(ThemeDialogComponent, {
      data: {data: theme_des, editing: theme_des ? true : false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.editing) {
          db.getThemeByDescription(theme_des?? "").then(
            theme => db.updateTheme(new Theme(theme.id, result.data))
          )
          .catch(err => console.error(err))
        } else {
          db.addTheme(new Theme(uuidv4(), result.data)).then()
        }
      }
      this.ngOnInit(); // Reload the page
    });
  }
}
