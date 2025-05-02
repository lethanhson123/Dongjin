import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02_tmp1 } from 'src/app/shared/MES/tsbom_ver02_tmp1.model';
import { tsbom_ver02_tmp1Service } from 'src/app/shared/MES/tsbom_ver02_tmp1.service';

@Component({
  selector: 'app-tsbom_ver02_tmp1',
  templateUrl: './tsbom_ver02_tmp1.component.html',
  styleUrls: ['./tsbom_ver02_tmp1.component.css']
})
export class tsbom_ver02_tmp1Component implements OnInit {

  @ViewChild('tsbom_ver02_tmp1Sort') tsbom_ver02_tmp1Sort: MatSort;
  @ViewChild('tsbom_ver02_tmp1Paginator') tsbom_ver02_tmp1Paginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02_tmp1Service: tsbom_ver02_tmp1Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_ver02_tmp1Search();
  }
  tsbom_ver02_tmp1Search() {
    this.tsbom_ver02_tmp1Service.SearchAll(this.tsbom_ver02_tmp1Sort, this.tsbom_ver02_tmp1Paginator);
  }
  tsbom_ver02_tmp1Save(element: tsbom_ver02_tmp1) {
    this.tsbom_ver02_tmp1Service.FormData = element;
    this.NotificationService.warn(this.tsbom_ver02_tmp1Service.ComponentSaveAll(this.tsbom_ver02_tmp1Sort, this.tsbom_ver02_tmp1Paginator));
  }
  tsbom_ver02_tmp1Delete(element: tsbom_ver02_tmp1) {
    this.tsbom_ver02_tmp1Service.BaseParameter.ID = element.BOM_IDX;
    this.NotificationService.warn(this.tsbom_ver02_tmp1Service.ComponentDeleteAll(this.tsbom_ver02_tmp1Sort, this.tsbom_ver02_tmp1Paginator));
  }
  tsbom_ver02_tmp1Add(element: tsbom_ver02_tmp1) {
    this.tsbom_ver02_tmp1Service.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_ver02_tmp1DetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_ver02_tmp1Search();
    });
  }
}
