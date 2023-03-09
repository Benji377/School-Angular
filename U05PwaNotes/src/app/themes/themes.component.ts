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
        console.log("Thiss", result);
      }
    )
    .catch(
      error => console.error("OH NO: ", error)
    )
  }

  openDialog(theme_des: string | undefined = undefined) {
    const dialogRef = this.dialog.open(ThemeDialogComponent, {
      data: {data: theme_des, editing: theme_des ? true : false}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.theme_desc = result;
      if (result) {
        console.log(result);
        db.addTheme(new Theme(uuidv4(), result.data)).then()
      }
      this.ngOnInit()
    });
  }

}
