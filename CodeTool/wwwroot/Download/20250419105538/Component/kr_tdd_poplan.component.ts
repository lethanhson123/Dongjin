import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { kr_tdd_poplan } from 'src/app/shared/MES/kr_tdd_poplan.model';
import { kr_tdd_poplanService } from 'src/app/shared/MES/kr_tdd_poplan.service';

@Component({
  selector: 'app-kr_tdd_poplan',
  templateUrl: './kr_tdd_poplan.component.html',
  styleUrls: ['./kr_tdd_poplan.component.css']
})
export class kr_tdd_poplanComponent implements OnInit {

  @ViewChild('kr_tdd_poplanSort') kr_tdd_poplanSort: MatSort;
  @ViewChild('kr_tdd_poplanPaginator') kr_tdd_poplanPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public kr_tdd_poplanService: kr_tdd_poplanService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.kr_tdd_poplanSearch();
  }
  kr_tdd_poplanSearch() {
    this.kr_tdd_poplanService.SearchAll(this.kr_tdd_poplanSort, this.kr_tdd_poplanPaginator);
  }
  kr_tdd_poplanSave(element: kr_tdd_poplan) {
    this.kr_tdd_poplanService.FormData = element;
    this.NotificationService.warn(this.kr_tdd_poplanService.ComponentSaveAll(this.kr_tdd_poplanSort, this.kr_tdd_poplanPaginator));
  }
  kr_tdd_poplanDelete(element: kr_tdd_poplan) {
    this.kr_tdd_poplanService.BaseParameter.ID = element.TDD_PP_IDX;
    this.NotificationService.warn(this.kr_tdd_poplanService.ComponentDeleteAll(this.kr_tdd_poplanSort, this.kr_tdd_poplanPaginator));
  }
  kr_tdd_poplanAdd(element: kr_tdd_poplan) {
    this.kr_tdd_poplanService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(kr_tdd_poplanDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.kr_tdd_poplanSearch();
    });
  }
}
