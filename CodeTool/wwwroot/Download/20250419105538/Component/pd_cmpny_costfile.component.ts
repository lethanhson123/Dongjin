import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_cmpny_costfile } from 'src/app/shared/MES/pd_cmpny_costfile.model';
import { pd_cmpny_costfileService } from 'src/app/shared/MES/pd_cmpny_costfile.service';

@Component({
  selector: 'app-pd_cmpny_costfile',
  templateUrl: './pd_cmpny_costfile.component.html',
  styleUrls: ['./pd_cmpny_costfile.component.css']
})
export class pd_cmpny_costfileComponent implements OnInit {

  @ViewChild('pd_cmpny_costfileSort') pd_cmpny_costfileSort: MatSort;
  @ViewChild('pd_cmpny_costfilePaginator') pd_cmpny_costfilePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_cmpny_costfileService: pd_cmpny_costfileService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_cmpny_costfileSearch();
  }
  pd_cmpny_costfileSearch() {
    this.pd_cmpny_costfileService.SearchAll(this.pd_cmpny_costfileSort, this.pd_cmpny_costfilePaginator);
  }
  pd_cmpny_costfileSave(element: pd_cmpny_costfile) {
    this.pd_cmpny_costfileService.FormData = element;
    this.NotificationService.warn(this.pd_cmpny_costfileService.ComponentSaveAll(this.pd_cmpny_costfileSort, this.pd_cmpny_costfilePaginator));
  }
  pd_cmpny_costfileDelete(element: pd_cmpny_costfile) {
    this.pd_cmpny_costfileService.BaseParameter.ID = element.PD_CMPNY_PART_IDX;
    this.NotificationService.warn(this.pd_cmpny_costfileService.ComponentDeleteAll(this.pd_cmpny_costfileSort, this.pd_cmpny_costfilePaginator));
  }
  pd_cmpny_costfileAdd(element: pd_cmpny_costfile) {
    this.pd_cmpny_costfileService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_cmpny_costfileDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_cmpny_costfileSearch();
    });
  }
}
