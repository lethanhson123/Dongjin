import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tscmpny } from 'src/app/shared/MES/tscmpny.model';
import { tscmpnyService } from 'src/app/shared/MES/tscmpny.service';

@Component({
  selector: 'app-tscmpny',
  templateUrl: './tscmpny.component.html',
  styleUrls: ['./tscmpny.component.css']
})
export class tscmpnyComponent implements OnInit {

  @ViewChild('tscmpnySort') tscmpnySort: MatSort;
  @ViewChild('tscmpnyPaginator') tscmpnyPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tscmpnyService: tscmpnyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tscmpnySearch();
  }
  tscmpnySearch() {
    this.tscmpnyService.SearchAll(this.tscmpnySort, this.tscmpnyPaginator);
  }
  tscmpnySave(element: tscmpny) {
    this.tscmpnyService.FormData = element;
    this.NotificationService.warn(this.tscmpnyService.ComponentSaveAll(this.tscmpnySort, this.tscmpnyPaginator));
  }
  tscmpnyDelete(element: tscmpny) {
    this.tscmpnyService.BaseParameter.ID = element.CMPNY_IDX;
    this.NotificationService.warn(this.tscmpnyService.ComponentDeleteAll(this.tscmpnySort, this.tscmpnyPaginator));
  }
  tscmpnyAdd(element: tscmpny) {
    this.tscmpnyService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tscmpnyDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tscmpnySearch();
    });
  }
}
