import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tmmtin_dmm } from 'src/app/shared/MES/tmmtin_dmm.model';
import { tmmtin_dmmService } from 'src/app/shared/MES/tmmtin_dmm.service';

@Component({
  selector: 'app-tmmtin_dmm',
  templateUrl: './tmmtin_dmm.component.html',
  styleUrls: ['./tmmtin_dmm.component.css']
})
export class tmmtin_dmmComponent implements OnInit {

  @ViewChild('tmmtin_dmmSort') tmmtin_dmmSort: MatSort;
  @ViewChild('tmmtin_dmmPaginator') tmmtin_dmmPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tmmtin_dmmService: tmmtin_dmmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tmmtin_dmmSearch();
  }
  tmmtin_dmmSearch() {
    this.tmmtin_dmmService.SearchAll(this.tmmtin_dmmSort, this.tmmtin_dmmPaginator);
  }
  tmmtin_dmmSave(element: tmmtin_dmm) {
    this.tmmtin_dmmService.FormData = element;
    this.NotificationService.warn(this.tmmtin_dmmService.ComponentSaveAll(this.tmmtin_dmmSort, this.tmmtin_dmmPaginator));
  }
  tmmtin_dmmDelete(element: tmmtin_dmm) {
    this.tmmtin_dmmService.BaseParameter.ID = element.TMMTIN_DMM_IDX;
    this.NotificationService.warn(this.tmmtin_dmmService.ComponentDeleteAll(this.tmmtin_dmmSort, this.tmmtin_dmmPaginator));
  }
  tmmtin_dmmAdd(element: tmmtin_dmm) {
    this.tmmtin_dmmService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tmmtin_dmmDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tmmtin_dmmSearch();
    });
  }
}
