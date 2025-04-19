import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsbom_ver02 } from 'src/app/shared/MES/tsbom_ver02.model';
import { tsbom_ver02Service } from 'src/app/shared/MES/tsbom_ver02.service';

@Component({
  selector: 'app-tsbom_ver02',
  templateUrl: './tsbom_ver02.component.html',
  styleUrls: ['./tsbom_ver02.component.css']
})
export class tsbom_ver02Component implements OnInit {

  @ViewChild('tsbom_ver02Sort') tsbom_ver02Sort: MatSort;
  @ViewChild('tsbom_ver02Paginator') tsbom_ver02Paginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsbom_ver02Service: tsbom_ver02Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsbom_ver02Search();
  }
  tsbom_ver02Search() {
    this.tsbom_ver02Service.SearchAll(this.tsbom_ver02Sort, this.tsbom_ver02Paginator);
  }
  tsbom_ver02Save(element: tsbom_ver02) {
    this.tsbom_ver02Service.FormData = element;
    this.NotificationService.warn(this.tsbom_ver02Service.ComponentSaveAll(this.tsbom_ver02Sort, this.tsbom_ver02Paginator));
  }
  tsbom_ver02Delete(element: tsbom_ver02) {
    this.tsbom_ver02Service.BaseParameter.ID = element.BOM_IDX;
    this.NotificationService.warn(this.tsbom_ver02Service.ComponentDeleteAll(this.tsbom_ver02Sort, this.tsbom_ver02Paginator));
  }
  tsbom_ver02Add(element: tsbom_ver02) {
    this.tsbom_ver02Service.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsbom_ver02DetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsbom_ver02Search();
    });
  }
}
