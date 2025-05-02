import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_tiivtr } from 'src/app/shared/MES/pd_tiivtr.model';
import { pd_tiivtrService } from 'src/app/shared/MES/pd_tiivtr.service';

@Component({
  selector: 'app-pd_tiivtr',
  templateUrl: './pd_tiivtr.component.html',
  styleUrls: ['./pd_tiivtr.component.css']
})
export class pd_tiivtrComponent implements OnInit {

  @ViewChild('pd_tiivtrSort') pd_tiivtrSort: MatSort;
  @ViewChild('pd_tiivtrPaginator') pd_tiivtrPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_tiivtrService: pd_tiivtrService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_tiivtrSearch();
  }
  pd_tiivtrSearch() {
    this.pd_tiivtrService.SearchAll(this.pd_tiivtrSort, this.pd_tiivtrPaginator);
  }
  pd_tiivtrSave(element: pd_tiivtr) {
    this.pd_tiivtrService.FormData = element;
    this.NotificationService.warn(this.pd_tiivtrService.ComponentSaveAll(this.pd_tiivtrSort, this.pd_tiivtrPaginator));
  }
  pd_tiivtrDelete(element: pd_tiivtr) {
    this.pd_tiivtrService.BaseParameter.ID = element.IV_IDX;
    this.NotificationService.warn(this.pd_tiivtrService.ComponentDeleteAll(this.pd_tiivtrSort, this.pd_tiivtrPaginator));
  }
  pd_tiivtrAdd(element: pd_tiivtr) {
    this.pd_tiivtrService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_tiivtrDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_tiivtrSearch();
    });
  }
}
