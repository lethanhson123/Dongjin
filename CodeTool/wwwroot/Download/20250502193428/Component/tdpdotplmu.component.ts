import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotplmu } from 'src/app/shared/MES/tdpdotplmu.model';
import { tdpdotplmuService } from 'src/app/shared/MES/tdpdotplmu.service';

@Component({
  selector: 'app-tdpdotplmu',
  templateUrl: './tdpdotplmu.component.html',
  styleUrls: ['./tdpdotplmu.component.css']
})
export class tdpdotplmuComponent implements OnInit {

  @ViewChild('tdpdotplmuSort') tdpdotplmuSort: MatSort;
  @ViewChild('tdpdotplmuPaginator') tdpdotplmuPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotplmuService: tdpdotplmuService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotplmuSearch();
  }
  tdpdotplmuSearch() {
    this.tdpdotplmuService.SearchAll(this.tdpdotplmuSort, this.tdpdotplmuPaginator);
  }
  tdpdotplmuSave(element: tdpdotplmu) {
    this.tdpdotplmuService.FormData = element;
    this.NotificationService.warn(this.tdpdotplmuService.ComponentSaveAll(this.tdpdotplmuSort, this.tdpdotplmuPaginator));
  }
  tdpdotplmuDelete(element: tdpdotplmu) {
    this.tdpdotplmuService.BaseParameter.ID = element.TDPDOTPLMU_IDX;
    this.NotificationService.warn(this.tdpdotplmuService.ComponentDeleteAll(this.tdpdotplmuSort, this.tdpdotplmuPaginator));
  }
  tdpdotplmuAdd(element: tdpdotplmu) {
    this.tdpdotplmuService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotplmuDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotplmuSearch();
    });
  }
}
