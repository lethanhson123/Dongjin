import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom } from 'src/app/shared/MES/torder_bom.model';
import { torder_bomService } from 'src/app/shared/MES/torder_bom.service';

@Component({
  selector: 'app-torder_bom',
  templateUrl: './torder_bom.component.html',
  styleUrls: ['./torder_bom.component.css']
})
export class torder_bomComponent implements OnInit {

  @ViewChild('torder_bomSort') torder_bomSort: MatSort;
  @ViewChild('torder_bomPaginator') torder_bomPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bomService: torder_bomService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bomSearch();
  }
  torder_bomSearch() {
    this.torder_bomService.SearchAll(this.torder_bomSort, this.torder_bomPaginator);
  }
  torder_bomSave(element: torder_bom) {
    this.torder_bomService.FormData = element;
    this.NotificationService.warn(this.torder_bomService.ComponentSaveAll(this.torder_bomSort, this.torder_bomPaginator));
  }
  torder_bomDelete(element: torder_bom) {
    this.torder_bomService.BaseParameter.ID = element.TORDER_BOM_IDX;
    this.NotificationService.warn(this.torder_bomService.ComponentDeleteAll(this.torder_bomSort, this.torder_bomPaginator));
  }
  torder_bomAdd(element: torder_bom) {
    this.torder_bomService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bomDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bomSearch();
    });
  }
}
