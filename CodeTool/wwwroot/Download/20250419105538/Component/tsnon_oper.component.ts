import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsnon_oper } from 'src/app/shared/MES/tsnon_oper.model';
import { tsnon_operService } from 'src/app/shared/MES/tsnon_oper.service';

@Component({
  selector: 'app-tsnon_oper',
  templateUrl: './tsnon_oper.component.html',
  styleUrls: ['./tsnon_oper.component.css']
})
export class tsnon_operComponent implements OnInit {

  @ViewChild('tsnon_operSort') tsnon_operSort: MatSort;
  @ViewChild('tsnon_operPaginator') tsnon_operPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsnon_operService: tsnon_operService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsnon_operSearch();
  }
  tsnon_operSearch() {
    this.tsnon_operService.SearchAll(this.tsnon_operSort, this.tsnon_operPaginator);
  }
  tsnon_operSave(element: tsnon_oper) {
    this.tsnon_operService.FormData = element;
    this.NotificationService.warn(this.tsnon_operService.ComponentSaveAll(this.tsnon_operSort, this.tsnon_operPaginator));
  }
  tsnon_operDelete(element: tsnon_oper) {
    this.tsnon_operService.BaseParameter.ID = element.TSNON_OPER_IDX;
    this.NotificationService.warn(this.tsnon_operService.ComponentDeleteAll(this.tsnon_operSort, this.tsnon_operPaginator));
  }
  tsnon_operAdd(element: tsnon_oper) {
    this.tsnon_operService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsnon_operDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsnon_operSearch();
    });
  }
}
