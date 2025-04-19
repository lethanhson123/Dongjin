import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torderinspection_sw } from 'src/app/shared/MES/torderinspection_sw.model';
import { torderinspection_swService } from 'src/app/shared/MES/torderinspection_sw.service';

@Component({
  selector: 'app-torderinspection_sw',
  templateUrl: './torderinspection_sw.component.html',
  styleUrls: ['./torderinspection_sw.component.css']
})
export class torderinspection_swComponent implements OnInit {

  @ViewChild('torderinspection_swSort') torderinspection_swSort: MatSort;
  @ViewChild('torderinspection_swPaginator') torderinspection_swPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torderinspection_swService: torderinspection_swService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torderinspection_swSearch();
  }
  torderinspection_swSearch() {
    this.torderinspection_swService.SearchAll(this.torderinspection_swSort, this.torderinspection_swPaginator);
  }
  torderinspection_swSave(element: torderinspection_sw) {
    this.torderinspection_swService.FormData = element;
    this.NotificationService.warn(this.torderinspection_swService.ComponentSaveAll(this.torderinspection_swSort, this.torderinspection_swPaginator));
  }
  torderinspection_swDelete(element: torderinspection_sw) {
    this.torderinspection_swService.BaseParameter.ID = element.INSPECTION_IDX;
    this.NotificationService.warn(this.torderinspection_swService.ComponentDeleteAll(this.torderinspection_swSort, this.torderinspection_swPaginator));
  }
  torderinspection_swAdd(element: torderinspection_sw) {
    this.torderinspection_swService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torderinspection_swDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torderinspection_swSearch();
    });
  }
}
