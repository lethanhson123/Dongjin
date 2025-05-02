import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsmenu } from 'src/app/shared/MES/tsmenu.model';
import { tsmenuService } from 'src/app/shared/MES/tsmenu.service';

@Component({
  selector: 'app-tsmenu',
  templateUrl: './tsmenu.component.html',
  styleUrls: ['./tsmenu.component.css']
})
export class tsmenuComponent implements OnInit {

  @ViewChild('tsmenuSort') tsmenuSort: MatSort;
  @ViewChild('tsmenuPaginator') tsmenuPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsmenuService: tsmenuService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsmenuSearch();
  }
  tsmenuSearch() {
    this.tsmenuService.SearchAll(this.tsmenuSort, this.tsmenuPaginator);
  }
  tsmenuSave(element: tsmenu) {
    this.tsmenuService.FormData = element;
    this.NotificationService.warn(this.tsmenuService.ComponentSaveAll(this.tsmenuSort, this.tsmenuPaginator));
  }
  tsmenuDelete(element: tsmenu) {
    this.tsmenuService.BaseParameter.ID = element.MENU_IDX;
    this.NotificationService.warn(this.tsmenuService.ComponentDeleteAll(this.tsmenuSort, this.tsmenuPaginator));
  }
  tsmenuAdd(element: tsmenu) {
    this.tsmenuService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsmenuDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsmenuSearch();
    });
  }
}
