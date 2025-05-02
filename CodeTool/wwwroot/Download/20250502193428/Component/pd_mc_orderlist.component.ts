import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_mc_orderlist } from 'src/app/shared/MES/pd_mc_orderlist.model';
import { pd_mc_orderlistService } from 'src/app/shared/MES/pd_mc_orderlist.service';

@Component({
  selector: 'app-pd_mc_orderlist',
  templateUrl: './pd_mc_orderlist.component.html',
  styleUrls: ['./pd_mc_orderlist.component.css']
})
export class pd_mc_orderlistComponent implements OnInit {

  @ViewChild('pd_mc_orderlistSort') pd_mc_orderlistSort: MatSort;
  @ViewChild('pd_mc_orderlistPaginator') pd_mc_orderlistPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_mc_orderlistService: pd_mc_orderlistService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_mc_orderlistSearch();
  }
  pd_mc_orderlistSearch() {
    this.pd_mc_orderlistService.SearchAll(this.pd_mc_orderlistSort, this.pd_mc_orderlistPaginator);
  }
  pd_mc_orderlistSave(element: pd_mc_orderlist) {
    this.pd_mc_orderlistService.FormData = element;
    this.NotificationService.warn(this.pd_mc_orderlistService.ComponentSaveAll(this.pd_mc_orderlistSort, this.pd_mc_orderlistPaginator));
  }
  pd_mc_orderlistDelete(element: pd_mc_orderlist) {
    this.pd_mc_orderlistService.BaseParameter.ID = element.PD_MC_ORDER_IDX;
    this.NotificationService.warn(this.pd_mc_orderlistService.ComponentDeleteAll(this.pd_mc_orderlistSort, this.pd_mc_orderlistPaginator));
  }
  pd_mc_orderlistAdd(element: pd_mc_orderlist) {
    this.pd_mc_orderlistService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_mc_orderlistDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_mc_orderlistSearch();
    });
  }
}
