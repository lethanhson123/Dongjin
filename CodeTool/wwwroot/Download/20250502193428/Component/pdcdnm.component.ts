import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { pdcdnm } from 'src/app/shared/MES/pdcdnm.model';
import { pdcdnmService } from 'src/app/shared/MES/pdcdnm.service';

@Component({
  selector: 'app-pdcdnm',
  templateUrl: './pdcdnm.component.html',
  styleUrls: ['./pdcdnm.component.css']
})
export class pdcdnmComponent implements OnInit {

  @ViewChild('pdcdnmSort') pdcdnmSort: MatSort;
  @ViewChild('pdcdnmPaginator') pdcdnmPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public pdcdnmService: pdcdnmService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.pdcdnmSearch();
  }
  pdcdnmSearch() {
    this.pdcdnmService.SearchAll(this.pdcdnmSort, this.pdcdnmPaginator);
  }
  pdcdnmSave(element: pdcdnm) {
    this.pdcdnmService.FormData = element;
    this.NotificationService.warn(this.pdcdnmService.ComponentSaveAll(this.pdcdnmSort, this.pdcdnmPaginator));
  }
  pdcdnmDelete(element: pdcdnm) {
    this.pdcdnmService.BaseParameter.ID = element.CD_IDX;
    this.NotificationService.warn(this.pdcdnmService.ComponentDeleteAll(this.pdcdnmSort, this.pdcdnmPaginator));
  }
  pdcdnmAdd(element: pdcdnm) {
    this.pdcdnmService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(pdcdnmDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.pdcdnmSearch();
    });
  }
}
