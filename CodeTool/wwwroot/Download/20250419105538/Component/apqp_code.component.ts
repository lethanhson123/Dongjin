import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { apqp_code } from 'src/app/shared/MES/apqp_code.model';
import { apqp_codeService } from 'src/app/shared/MES/apqp_code.service';

@Component({
  selector: 'app-apqp_code',
  templateUrl: './apqp_code.component.html',
  styleUrls: ['./apqp_code.component.css']
})
export class apqp_codeComponent implements OnInit {

  @ViewChild('apqp_codeSort') apqp_codeSort: MatSort;
  @ViewChild('apqp_codePaginator') apqp_codePaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public apqp_codeService: apqp_codeService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.apqp_codeSearch();
  }
  apqp_codeSearch() {
    this.apqp_codeService.SearchAll(this.apqp_codeSort, this.apqp_codePaginator);
  }
  apqp_codeSave(element: apqp_code) {
    this.apqp_codeService.FormData = element;
    this.NotificationService.warn(this.apqp_codeService.ComponentSaveAll(this.apqp_codeSort, this.apqp_codePaginator));
  }
  apqp_codeDelete(element: apqp_code) {
    this.apqp_codeService.BaseParameter.ID = element.CD_IDX;
    this.NotificationService.warn(this.apqp_codeService.ComponentDeleteAll(this.apqp_codeSort, this.apqp_codePaginator));
  }
  apqp_codeAdd(element: apqp_code) {
    this.apqp_codeService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(apqp_codeDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.apqp_codeSearch();
    });
  }
}
