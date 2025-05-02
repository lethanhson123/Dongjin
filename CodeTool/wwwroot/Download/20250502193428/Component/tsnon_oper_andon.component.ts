import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_andon } from 'src/app/shared/MES/tsnon_oper_andon.model';
import { tsnon_oper_andonService } from 'src/app/shared/MES/tsnon_oper_andon.service';

@Component({
  selector: 'app-tsnon_oper_andon',
  templateUrl: './tsnon_oper_andon.component.html',
  styleUrls: ['./tsnon_oper_andon.component.css']
})
export class tsnon_oper_andonComponent implements OnInit {

  @ViewChild('tsnon_oper_andonSort') tsnon_oper_andonSort: MatSort;
  @ViewChild('tsnon_oper_andonPaginator') tsnon_oper_andonPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_andonService: tsnon_oper_andonService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_oper_andonSearch();
  }
  tsnon_oper_andonSearch() {
    this.tsnon_oper_andonService.SearchAll(this.tsnon_oper_andonSort, this.tsnon_oper_andonPaginator);
  }
  tsnon_oper_andonSave(element: tsnon_oper_andon) {
    this.tsnon_oper_andonService.FormData = element;
    this.NotificationService.warn(this.tsnon_oper_andonService.ComponentSaveAll(this.tsnon_oper_andonSort, this.tsnon_oper_andonPaginator));
  }
  tsnon_oper_andonDelete(element: tsnon_oper_andon) {
    this.tsnon_oper_andonService.BaseParameter.ID = element.TSNON_OPER_MITOR_IDX;
    this.NotificationService.warn(this.tsnon_oper_andonService.ComponentDeleteAll(this.tsnon_oper_andonSort, this.tsnon_oper_andonPaginator));
  }
  tsnon_oper_andonAdd(element: tsnon_oper_andon) {
    this.tsnon_oper_andonService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_oper_andonDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_oper_andonSearch();
    });
  }
}
