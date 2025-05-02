import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcmpny } from 'src/app/shared/MES/pdcmpny.model';
import { pdcmpnyService } from 'src/app/shared/MES/pdcmpny.service';

@Component({
  selector: 'app-pdcmpny',
  templateUrl: './pdcmpny.component.html',
  styleUrls: ['./pdcmpny.component.css']
})
export class pdcmpnyComponent implements OnInit {

  @ViewChild('pdcmpnySort') pdcmpnySort: MatSort;
  @ViewChild('pdcmpnyPaginator') pdcmpnyPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcmpnyService: pdcmpnyService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcmpnySearch();
  }
  pdcmpnySearch() {
    this.pdcmpnyService.SearchAll(this.pdcmpnySort, this.pdcmpnyPaginator);
  }
  pdcmpnySave(element: pdcmpny) {
    this.pdcmpnyService.FormData = element;
    this.NotificationService.warn(this.pdcmpnyService.ComponentSaveAll(this.pdcmpnySort, this.pdcmpnyPaginator));
  }
  pdcmpnyDelete(element: pdcmpny) {
    this.pdcmpnyService.BaseParameter.ID = element.CMPNY_IDX;
    this.NotificationService.warn(this.pdcmpnyService.ComponentDeleteAll(this.pdcmpnySort, this.pdcmpnyPaginator));
  }
  pdcmpnyAdd(element: pdcmpny) {
    this.pdcmpnyService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdcmpnyDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdcmpnySearch();
    });
  }
}
