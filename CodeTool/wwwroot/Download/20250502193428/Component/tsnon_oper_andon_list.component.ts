import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_andon_list } from 'src/app/shared/MES/tsnon_oper_andon_list.model';
import { tsnon_oper_andon_listService } from 'src/app/shared/MES/tsnon_oper_andon_list.service';

@Component({
  selector: 'app-tsnon_oper_andon_list',
  templateUrl: './tsnon_oper_andon_list.component.html',
  styleUrls: ['./tsnon_oper_andon_list.component.css']
})
export class tsnon_oper_andon_listComponent implements OnInit {

  @ViewChild('tsnon_oper_andon_listSort') tsnon_oper_andon_listSort: MatSort;
  @ViewChild('tsnon_oper_andon_listPaginator') tsnon_oper_andon_listPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_andon_listService: tsnon_oper_andon_listService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_oper_andon_listSearch();
  }
  tsnon_oper_andon_listSearch() {
    this.tsnon_oper_andon_listService.SearchAll(this.tsnon_oper_andon_listSort, this.tsnon_oper_andon_listPaginator);
  }
  tsnon_oper_andon_listSave(element: tsnon_oper_andon_list) {
    this.tsnon_oper_andon_listService.FormData = element;
    this.NotificationService.warn(this.tsnon_oper_andon_listService.ComponentSaveAll(this.tsnon_oper_andon_listSort, this.tsnon_oper_andon_listPaginator));
  }
  tsnon_oper_andon_listDelete(element: tsnon_oper_andon_list) {
    this.tsnon_oper_andon_listService.BaseParameter.ID = element.TSNON_OPER_MITOR_IDX;
    this.NotificationService.warn(this.tsnon_oper_andon_listService.ComponentDeleteAll(this.tsnon_oper_andon_listSort, this.tsnon_oper_andon_listPaginator));
  }
  tsnon_oper_andon_listAdd(element: tsnon_oper_andon_list) {
    this.tsnon_oper_andon_listService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_oper_andon_listDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_oper_andon_listSearch();
    });
  }
}
