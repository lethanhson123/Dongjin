import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_etc } from 'src/app/shared/MES/tdpdotpl_etc.model';
import { tdpdotpl_etcService } from 'src/app/shared/MES/tdpdotpl_etc.service';

@Component({
  selector: 'app-tdpdotpl_etc',
  templateUrl: './tdpdotpl_etc.component.html',
  styleUrls: ['./tdpdotpl_etc.component.css']
})
export class tdpdotpl_etcComponent implements OnInit {

  @ViewChild('tdpdotpl_etcSort') tdpdotpl_etcSort: MatSort;
  @ViewChild('tdpdotpl_etcPaginator') tdpdotpl_etcPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_etcService: tdpdotpl_etcService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_etcSearch();
  }
  tdpdotpl_etcSearch() {
    this.tdpdotpl_etcService.SearchAll(this.tdpdotpl_etcSort, this.tdpdotpl_etcPaginator);
  }
  tdpdotpl_etcSave(element: tdpdotpl_etc) {
    this.tdpdotpl_etcService.FormData = element;
    this.NotificationService.warn(this.tdpdotpl_etcService.ComponentSaveAll(this.tdpdotpl_etcSort, this.tdpdotpl_etcPaginator));
  }
  tdpdotpl_etcDelete(element: tdpdotpl_etc) {
    this.tdpdotpl_etcService.BaseParameter.ID = element.TDPDOTPL_ETC_IDX;
    this.NotificationService.warn(this.tdpdotpl_etcService.ComponentDeleteAll(this.tdpdotpl_etcSort, this.tdpdotpl_etcPaginator));
  }
  tdpdotpl_etcAdd(element: tdpdotpl_etc) {
    this.tdpdotpl_etcService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotpl_etcDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotpl_etcSearch();
    });
  }
}
