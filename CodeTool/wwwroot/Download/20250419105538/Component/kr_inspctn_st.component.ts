import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_inspctn_st } from 'src/app/shared/MES/kr_inspctn_st.model';
import { kr_inspctn_stService } from 'src/app/shared/MES/kr_inspctn_st.service';

@Component({
  selector: 'app-kr_inspctn_st',
  templateUrl: './kr_inspctn_st.component.html',
  styleUrls: ['./kr_inspctn_st.component.css']
})
export class kr_inspctn_stComponent implements OnInit {

  @ViewChild('kr_inspctn_stSort') kr_inspctn_stSort: MatSort;
  @ViewChild('kr_inspctn_stPaginator') kr_inspctn_stPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_inspctn_stService: kr_inspctn_stService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_inspctn_stSearch();
  }
  kr_inspctn_stSearch() {
    this.kr_inspctn_stService.SearchAll(this.kr_inspctn_stSort, this.kr_inspctn_stPaginator);
  }
  kr_inspctn_stSave(element: kr_inspctn_st) {
    this.kr_inspctn_stService.FormData = element;
    this.NotificationService.warn(this.kr_inspctn_stService.ComponentSaveAll(this.kr_inspctn_stSort, this.kr_inspctn_stPaginator));
  }
  kr_inspctn_stDelete(element: kr_inspctn_st) {
    this.kr_inspctn_stService.BaseParameter.ID = element.KR_INSPCTN_IDX;
    this.NotificationService.warn(this.kr_inspctn_stService.ComponentDeleteAll(this.kr_inspctn_stSort, this.kr_inspctn_stPaginator));
  }
  kr_inspctn_stAdd(element: kr_inspctn_st) {
    this.kr_inspctn_stService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_inspctn_stDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_inspctn_stSearch();
    });
  }
}
