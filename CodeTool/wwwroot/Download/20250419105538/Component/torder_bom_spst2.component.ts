import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { torder_bom_spst2 } from 'src/app/shared/MES/torder_bom_spst2.model';
import { torder_bom_spst2Service } from 'src/app/shared/MES/torder_bom_spst2.service';

@Component({
  selector: 'app-torder_bom_spst2',
  templateUrl: './torder_bom_spst2.component.html',
  styleUrls: ['./torder_bom_spst2.component.css']
})
export class torder_bom_spst2Component implements OnInit {

  @ViewChild('torder_bom_spst2Sort') torder_bom_spst2Sort: MatSort;
  @ViewChild('torder_bom_spst2Paginator') torder_bom_spst2Paginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public torder_bom_spst2Service: torder_bom_spst2Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.torder_bom_spst2Search();
  }
  torder_bom_spst2Search() {
    this.torder_bom_spst2Service.SearchAll(this.torder_bom_spst2Sort, this.torder_bom_spst2Paginator);
  }
  torder_bom_spst2Save(element: torder_bom_spst2) {
    this.torder_bom_spst2Service.FormData = element;
    this.NotificationService.warn(this.torder_bom_spst2Service.ComponentSaveAll(this.torder_bom_spst2Sort, this.torder_bom_spst2Paginator));
  }
  torder_bom_spst2Delete(element: torder_bom_spst2) {
    this.torder_bom_spst2Service.BaseParameter.ID = element.TORDER_BOMSPST2_IDX;
    this.NotificationService.warn(this.torder_bom_spst2Service.ComponentDeleteAll(this.torder_bom_spst2Sort, this.torder_bom_spst2Paginator));
  }
  torder_bom_spst2Add(element: torder_bom_spst2) {
    this.torder_bom_spst2Service.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(torder_bom_spst2DetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.torder_bom_spst2Search();
    });
  }
}
