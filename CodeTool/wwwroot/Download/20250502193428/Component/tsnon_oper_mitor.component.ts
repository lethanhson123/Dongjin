import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper_mitor } from 'src/app/shared/MES/tsnon_oper_mitor.model';
import { tsnon_oper_mitorService } from 'src/app/shared/MES/tsnon_oper_mitor.service';

@Component({
  selector: 'app-tsnon_oper_mitor',
  templateUrl: './tsnon_oper_mitor.component.html',
  styleUrls: ['./tsnon_oper_mitor.component.css']
})
export class tsnon_oper_mitorComponent implements OnInit {

  @ViewChild('tsnon_oper_mitorSort') tsnon_oper_mitorSort: MatSort;
  @ViewChild('tsnon_oper_mitorPaginator') tsnon_oper_mitorPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_oper_mitorService: tsnon_oper_mitorService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_oper_mitorSearch();
  }
  tsnon_oper_mitorSearch() {
    this.tsnon_oper_mitorService.SearchAll(this.tsnon_oper_mitorSort, this.tsnon_oper_mitorPaginator);
  }
  tsnon_oper_mitorSave(element: tsnon_oper_mitor) {
    this.tsnon_oper_mitorService.FormData = element;
    this.NotificationService.warn(this.tsnon_oper_mitorService.ComponentSaveAll(this.tsnon_oper_mitorSort, this.tsnon_oper_mitorPaginator));
  }
  tsnon_oper_mitorDelete(element: tsnon_oper_mitor) {
    this.tsnon_oper_mitorService.BaseParameter.ID = element.TSNON_OPER_MITOR_IDX;
    this.NotificationService.warn(this.tsnon_oper_mitorService.ComponentDeleteAll(this.tsnon_oper_mitorSort, this.tsnon_oper_mitorPaginator));
  }
  tsnon_oper_mitorAdd(element: tsnon_oper_mitor) {
    this.tsnon_oper_mitorService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_oper_mitorDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_oper_mitorSearch();
    });
  }
}
