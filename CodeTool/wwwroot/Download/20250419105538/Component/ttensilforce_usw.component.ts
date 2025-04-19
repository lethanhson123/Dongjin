import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttensilforce_usw } from 'src/app/shared/MES/ttensilforce_usw.model';
import { ttensilforce_uswService } from 'src/app/shared/MES/ttensilforce_usw.service';

@Component({
  selector: 'app-ttensilforce_usw',
  templateUrl: './ttensilforce_usw.component.html',
  styleUrls: ['./ttensilforce_usw.component.css']
})
export class ttensilforce_uswComponent implements OnInit {

  @ViewChild('ttensilforce_uswSort') ttensilforce_uswSort: MatSort;
  @ViewChild('ttensilforce_uswPaginator') ttensilforce_uswPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttensilforce_uswService: ttensilforce_uswService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttensilforce_uswSearch();
  }
  ttensilforce_uswSearch() {
    this.ttensilforce_uswService.SearchAll(this.ttensilforce_uswSort, this.ttensilforce_uswPaginator);
  }
  ttensilforce_uswSave(element: ttensilforce_usw) {
    this.ttensilforce_uswService.FormData = element;
    this.NotificationService.warn(this.ttensilforce_uswService.ComponentSaveAll(this.ttensilforce_uswSort, this.ttensilforce_uswPaginator));
  }
  ttensilforce_uswDelete(element: ttensilforce_usw) {
    this.ttensilforce_uswService.BaseParameter.ID = element.FORCE_USW_IDX;
    this.NotificationService.warn(this.ttensilforce_uswService.ComponentDeleteAll(this.ttensilforce_uswSort, this.ttensilforce_uswPaginator));
  }
  ttensilforce_uswAdd(element: ttensilforce_usw) {
    this.ttensilforce_uswService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttensilforce_uswDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttensilforce_uswSearch();
    });
  }
}
