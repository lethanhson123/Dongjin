import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscut_st_uph } from 'src/app/shared/MES/tscut_st_uph.model';
import { tscut_st_uphService } from 'src/app/shared/MES/tscut_st_uph.service';

@Component({
  selector: 'app-tscut_st_uph',
  templateUrl: './tscut_st_uph.component.html',
  styleUrls: ['./tscut_st_uph.component.css']
})
export class tscut_st_uphComponent implements OnInit {

  @ViewChild('tscut_st_uphSort') tscut_st_uphSort: MatSort;
  @ViewChild('tscut_st_uphPaginator') tscut_st_uphPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscut_st_uphService: tscut_st_uphService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscut_st_uphSearch();
  }
  tscut_st_uphSearch() {
    this.tscut_st_uphService.SearchAll(this.tscut_st_uphSort, this.tscut_st_uphPaginator);
  }
  tscut_st_uphSave(element: tscut_st_uph) {
    this.tscut_st_uphService.FormData = element;
    this.NotificationService.warn(this.tscut_st_uphService.ComponentSaveAll(this.tscut_st_uphSort, this.tscut_st_uphPaginator));
  }
  tscut_st_uphDelete(element: tscut_st_uph) {
    this.tscut_st_uphService.BaseParameter.ID = element.TSCUT_ST_UPH_IDX;
    this.NotificationService.warn(this.tscut_st_uphService.ComponentDeleteAll(this.tscut_st_uphSort, this.tscut_st_uphPaginator));
  }
  tscut_st_uphAdd(element: tscut_st_uph) {
    this.tscut_st_uphService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscut_st_uphDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscut_st_uphSearch();
    });
  }
}
