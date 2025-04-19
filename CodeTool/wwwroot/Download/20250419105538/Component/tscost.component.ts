import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscost } from 'src/app/shared/MES/tscost.model';
import { tscostService } from 'src/app/shared/MES/tscost.service';

@Component({
  selector: 'app-tscost',
  templateUrl: './tscost.component.html',
  styleUrls: ['./tscost.component.css']
})
export class tscostComponent implements OnInit {

  @ViewChild('tscostSort') tscostSort: MatSort;
  @ViewChild('tscostPaginator') tscostPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscostService: tscostService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscostSearch();
  }
  tscostSearch() {
    this.tscostService.SearchAll(this.tscostSort, this.tscostPaginator);
  }
  tscostSave(element: tscost) {
    this.tscostService.FormData = element;
    this.NotificationService.warn(this.tscostService.ComponentSaveAll(this.tscostSort, this.tscostPaginator));
  }
  tscostDelete(element: tscost) {
    this.tscostService.BaseParameter.ID = element.TSCOST_IDX;
    this.NotificationService.warn(this.tscostService.ComponentDeleteAll(this.tscostSort, this.tscostPaginator));
  }
  tscostAdd(element: tscost) {
    this.tscostService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscostDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscostSearch();
    });
  }
}
