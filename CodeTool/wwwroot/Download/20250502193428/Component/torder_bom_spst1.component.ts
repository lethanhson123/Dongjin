import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_spst1 } from 'src/app/shared/MES/torder_bom_spst1.model';
import { torder_bom_spst1Service } from 'src/app/shared/MES/torder_bom_spst1.service';

@Component({
  selector: 'app-torder_bom_spst1',
  templateUrl: './torder_bom_spst1.component.html',
  styleUrls: ['./torder_bom_spst1.component.css']
})
export class torder_bom_spst1Component implements OnInit {

  @ViewChild('torder_bom_spst1Sort') torder_bom_spst1Sort: MatSort;
  @ViewChild('torder_bom_spst1Paginator') torder_bom_spst1Paginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_spst1Service: torder_bom_spst1Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_spst1Search();
  }
  torder_bom_spst1Search() {
    this.torder_bom_spst1Service.SearchAll(this.torder_bom_spst1Sort, this.torder_bom_spst1Paginator);
  }
  torder_bom_spst1Save(element: torder_bom_spst1) {
    this.torder_bom_spst1Service.FormData = element;
    this.NotificationService.warn(this.torder_bom_spst1Service.ComponentSaveAll(this.torder_bom_spst1Sort, this.torder_bom_spst1Paginator));
  }
  torder_bom_spst1Delete(element: torder_bom_spst1) {
    this.torder_bom_spst1Service.BaseParameter.ID = element.TORDER_BOMSPST_IDX;
    this.NotificationService.warn(this.torder_bom_spst1Service.ComponentDeleteAll(this.torder_bom_spst1Sort, this.torder_bom_spst1Paginator));
  }
  torder_bom_spst1Add(element: torder_bom_spst1) {
    this.torder_bom_spst1Service.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bom_spst1DetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bom_spst1Search();
    });
  }
}
