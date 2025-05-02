import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdpdotpl } from 'src/app/shared/MES/kr_tdpdotpl.model';
import { kr_tdpdotplService } from 'src/app/shared/MES/kr_tdpdotpl.service';

@Component({
  selector: 'app-kr_tdpdotpl',
  templateUrl: './kr_tdpdotpl.component.html',
  styleUrls: ['./kr_tdpdotpl.component.css']
})
export class kr_tdpdotplComponent implements OnInit {

  @ViewChild('kr_tdpdotplSort') kr_tdpdotplSort: MatSort;
  @ViewChild('kr_tdpdotplPaginator') kr_tdpdotplPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdpdotplService: kr_tdpdotplService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdpdotplSearch();
  }
  kr_tdpdotplSearch() {
    this.kr_tdpdotplService.SearchAll(this.kr_tdpdotplSort, this.kr_tdpdotplPaginator);
  }
  kr_tdpdotplSave(element: kr_tdpdotpl) {
    this.kr_tdpdotplService.FormData = element;
    this.NotificationService.warn(this.kr_tdpdotplService.ComponentSaveAll(this.kr_tdpdotplSort, this.kr_tdpdotplPaginator));
  }
  kr_tdpdotplDelete(element: kr_tdpdotpl) {
    this.kr_tdpdotplService.BaseParameter.ID = element.PDOTPL_IDX;
    this.NotificationService.warn(this.kr_tdpdotplService.ComponentDeleteAll(this.kr_tdpdotplSort, this.kr_tdpdotplPaginator));
  }
  kr_tdpdotplAdd(element: kr_tdpdotpl) {
    this.kr_tdpdotplService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdpdotplDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdpdotplSearch();
    });
  }
}
