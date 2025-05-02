import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tdpdotpl_tmp } from 'src/app/shared/MES/tdpdotpl_tmp.model';
import { tdpdotpl_tmpService } from 'src/app/shared/MES/tdpdotpl_tmp.service';

@Component({
  selector: 'app-tdpdotpl_tmp',
  templateUrl: './tdpdotpl_tmp.component.html',
  styleUrls: ['./tdpdotpl_tmp.component.css']
})
export class tdpdotpl_tmpComponent implements OnInit {

  @ViewChild('tdpdotpl_tmpSort') tdpdotpl_tmpSort: MatSort;
  @ViewChild('tdpdotpl_tmpPaginator') tdpdotpl_tmpPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tdpdotpl_tmpService: tdpdotpl_tmpService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tdpdotpl_tmpSearch();
  }
  tdpdotpl_tmpSearch() {
    this.tdpdotpl_tmpService.SearchAll(this.tdpdotpl_tmpSort, this.tdpdotpl_tmpPaginator);
  }
  tdpdotpl_tmpSave(element: tdpdotpl_tmp) {
    this.tdpdotpl_tmpService.FormData = element;
    this.NotificationService.warn(this.tdpdotpl_tmpService.ComponentSaveAll(this.tdpdotpl_tmpSort, this.tdpdotpl_tmpPaginator));
  }
  tdpdotpl_tmpDelete(element: tdpdotpl_tmp) {
    this.tdpdotpl_tmpService.BaseParameter.ID = element.PDOTPL_IDX;
    this.NotificationService.warn(this.tdpdotpl_tmpService.ComponentDeleteAll(this.tdpdotpl_tmpSort, this.tdpdotpl_tmpPaginator));
  }
  tdpdotpl_tmpAdd(element: tdpdotpl_tmp) {
    this.tdpdotpl_tmpService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tdpdotpl_tmpDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tdpdotpl_tmpSearch();
    });
  }
}
