import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_sw } from 'src/app/shared/MES/torder_bom_sw.model';
import { torder_bom_swService } from 'src/app/shared/MES/torder_bom_sw.service';

@Component({
  selector: 'app-torder_bom_sw',
  templateUrl: './torder_bom_sw.component.html',
  styleUrls: ['./torder_bom_sw.component.css']
})
export class torder_bom_swComponent implements OnInit {

  @ViewChild('torder_bom_swSort') torder_bom_swSort: MatSort;
  @ViewChild('torder_bom_swPaginator') torder_bom_swPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_swService: torder_bom_swService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_swSearch();
  }
  torder_bom_swSearch() {
    this.torder_bom_swService.SearchAll(this.torder_bom_swSort, this.torder_bom_swPaginator);
  }
  torder_bom_swSave(element: torder_bom_sw) {
    this.torder_bom_swService.FormData = element;
    this.NotificationService.warn(this.torder_bom_swService.ComponentSaveAll(this.torder_bom_swSort, this.torder_bom_swPaginator));
  }
  torder_bom_swDelete(element: torder_bom_sw) {
    this.torder_bom_swService.BaseParameter.ID = element.TORDER_BOM_IDX;
    this.NotificationService.warn(this.torder_bom_swService.ComponentDeleteAll(this.torder_bom_swSort, this.torder_bom_swPaginator));
  }
  torder_bom_swAdd(element: torder_bom_sw) {
    this.torder_bom_swService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bom_swDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bom_swSearch();
    });
  }
}
