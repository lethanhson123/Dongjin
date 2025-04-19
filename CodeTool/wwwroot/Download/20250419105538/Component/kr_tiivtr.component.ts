import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tiivtr } from 'src/app/shared/MES/kr_tiivtr.model';
import { kr_tiivtrService } from 'src/app/shared/MES/kr_tiivtr.service';

@Component({
  selector: 'app-kr_tiivtr',
  templateUrl: './kr_tiivtr.component.html',
  styleUrls: ['./kr_tiivtr.component.css']
})
export class kr_tiivtrComponent implements OnInit {

  @ViewChild('kr_tiivtrSort') kr_tiivtrSort: MatSort;
  @ViewChild('kr_tiivtrPaginator') kr_tiivtrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tiivtrService: kr_tiivtrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tiivtrSearch();
  }
  kr_tiivtrSearch() {
    this.kr_tiivtrService.SearchAll(this.kr_tiivtrSort, this.kr_tiivtrPaginator);
  }
  kr_tiivtrSave(element: kr_tiivtr) {
    this.kr_tiivtrService.FormData = element;
    this.NotificationService.warn(this.kr_tiivtrService.ComponentSaveAll(this.kr_tiivtrSort, this.kr_tiivtrPaginator));
  }
  kr_tiivtrDelete(element: kr_tiivtr) {
    this.kr_tiivtrService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.kr_tiivtrService.ComponentDeleteAll(this.kr_tiivtrSort, this.kr_tiivtrPaginator));
  }
  kr_tiivtrAdd(element: kr_tiivtr) {
    this.kr_tiivtrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tiivtrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tiivtrSearch();
    });
  }
}
