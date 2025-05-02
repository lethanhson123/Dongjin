import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_inspctn_test } from 'src/app/shared/MES/kr_inspctn_test.model';
import { kr_inspctn_testService } from 'src/app/shared/MES/kr_inspctn_test.service';

@Component({
  selector: 'app-kr_inspctn_test',
  templateUrl: './kr_inspctn_test.component.html',
  styleUrls: ['./kr_inspctn_test.component.css']
})
export class kr_inspctn_testComponent implements OnInit {

  @ViewChild('kr_inspctn_testSort') kr_inspctn_testSort: MatSort;
  @ViewChild('kr_inspctn_testPaginator') kr_inspctn_testPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_inspctn_testService: kr_inspctn_testService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_inspctn_testSearch();
  }
  kr_inspctn_testSearch() {
    this.kr_inspctn_testService.SearchAll(this.kr_inspctn_testSort, this.kr_inspctn_testPaginator);
  }
  kr_inspctn_testSave(element: kr_inspctn_test) {
    this.kr_inspctn_testService.FormData = element;
    this.NotificationService.warn(this.kr_inspctn_testService.ComponentSaveAll(this.kr_inspctn_testSort, this.kr_inspctn_testPaginator));
  }
  kr_inspctn_testDelete(element: kr_inspctn_test) {
    this.kr_inspctn_testService.BaseParameter.ID = element.KR_INSPCTN_TEST_IDX;
    this.NotificationService.warn(this.kr_inspctn_testService.ComponentDeleteAll(this.kr_inspctn_testSort, this.kr_inspctn_testPaginator));
  }
  kr_inspctn_testAdd(element: kr_inspctn_test) {
    this.kr_inspctn_testService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_inspctn_testDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_inspctn_testSearch();
    });
  }
}
