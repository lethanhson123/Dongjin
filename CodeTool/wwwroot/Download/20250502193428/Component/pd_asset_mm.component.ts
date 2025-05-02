import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pd_asset_mm } from 'src/app/shared/MES/pd_asset_mm.model';
import { pd_asset_mmService } from 'src/app/shared/MES/pd_asset_mm.service';

@Component({
  selector: 'app-pd_asset_mm',
  templateUrl: './pd_asset_mm.component.html',
  styleUrls: ['./pd_asset_mm.component.css']
})
export class pd_asset_mmComponent implements OnInit {

  @ViewChild('pd_asset_mmSort') pd_asset_mmSort: MatSort;
  @ViewChild('pd_asset_mmPaginator') pd_asset_mmPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pd_asset_mmService: pd_asset_mmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pd_asset_mmSearch();
  }
  pd_asset_mmSearch() {
    this.pd_asset_mmService.SearchAll(this.pd_asset_mmSort, this.pd_asset_mmPaginator);
  }
  pd_asset_mmSave(element: pd_asset_mm) {
    this.pd_asset_mmService.FormData = element;
    this.NotificationService.warn(this.pd_asset_mmService.ComponentSaveAll(this.pd_asset_mmSort, this.pd_asset_mmPaginator));
  }
  pd_asset_mmDelete(element: pd_asset_mm) {
    this.pd_asset_mmService.BaseParameter.ID = element.PD_ASSET_IDX;
    this.NotificationService.warn(this.pd_asset_mmService.ComponentDeleteAll(this.pd_asset_mmSort, this.pd_asset_mmPaginator));
  }
  pd_asset_mmAdd(element: pd_asset_mm) {
    this.pd_asset_mmService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pd_asset_mmDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pd_asset_mmSearch();
    });
  }
}
