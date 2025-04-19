import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdmtim_hist } from 'src/app/shared/MES/tdpdmtim_hist.model';
import { tdpdmtim_histService } from 'src/app/shared/MES/tdpdmtim_hist.service';

@Component({
  selector: 'app-tdpdmtim_hist',
  templateUrl: './tdpdmtim_hist.component.html',
  styleUrls: ['./tdpdmtim_hist.component.css']
})
export class tdpdmtim_histComponent implements OnInit {

  @ViewChild('tdpdmtim_histSort') tdpdmtim_histSort: MatSort;
  @ViewChild('tdpdmtim_histPaginator') tdpdmtim_histPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdmtim_histService: tdpdmtim_histService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdmtim_histSearch();
  }
  tdpdmtim_histSearch() {
    this.tdpdmtim_histService.SearchAll(this.tdpdmtim_histSort, this.tdpdmtim_histPaginator);
  }
  tdpdmtim_histSave(element: tdpdmtim_hist) {
    this.tdpdmtim_histService.FormData = element;
    this.NotificationService.warn(this.tdpdmtim_histService.ComponentSaveAll(this.tdpdmtim_histSort, this.tdpdmtim_histPaginator));
  }
  tdpdmtim_histDelete(element: tdpdmtim_hist) {
    this.tdpdmtim_histService.BaseParameter.ID = element.PDMTIN_IDX;
    this.NotificationService.warn(this.tdpdmtim_histService.ComponentDeleteAll(this.tdpdmtim_histSort, this.tdpdmtim_histPaginator));
  }
  tdpdmtim_histAdd(element: tdpdmtim_hist) {
    this.tdpdmtim_histService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdmtim_histDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdmtim_histSearch();
    });
  }
}
