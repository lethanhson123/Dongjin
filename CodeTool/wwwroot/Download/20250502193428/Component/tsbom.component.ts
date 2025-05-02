import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom } from 'src/app/shared/MES/tsbom.model';
import { tsbomService } from 'src/app/shared/MES/tsbom.service';

@Component({
  selector: 'app-tsbom',
  templateUrl: './tsbom.component.html',
  styleUrls: ['./tsbom.component.css']
})
export class tsbomComponent implements OnInit {

  @ViewChild('tsbomSort') tsbomSort: MatSort;
  @ViewChild('tsbomPaginator') tsbomPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbomService: tsbomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbomSearch();
  }
  tsbomSearch() {
    this.tsbomService.SearchAll(this.tsbomSort, this.tsbomPaginator);
  }
  tsbomSave(element: tsbom) {
    this.tsbomService.FormData = element;
    this.NotificationService.warn(this.tsbomService.ComponentSaveAll(this.tsbomSort, this.tsbomPaginator));
  }
  tsbomDelete(element: tsbom) {
    this.tsbomService.BaseParameter.ID = element.BOM_IDX;
    this.NotificationService.warn(this.tsbomService.ComponentDeleteAll(this.tsbomSort, this.tsbomPaginator));
  }
  tsbomAdd(element: tsbom) {
    this.tsbomService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbomDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbomSearch();
    });
  }
}
