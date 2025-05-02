import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { twtool } from 'src/app/shared/MES/twtool.model';
import { twtoolService } from 'src/app/shared/MES/twtool.service';

@Component({
  selector: 'app-twtool',
  templateUrl: './twtool.component.html',
  styleUrls: ['./twtool.component.css']
})
export class twtoolComponent implements OnInit {

  @ViewChild('twtoolSort') twtoolSort: MatSort;
  @ViewChild('twtoolPaginator') twtoolPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public twtoolService: twtoolService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.twtoolSearch();
  }
  twtoolSearch() {
    this.twtoolService.SearchAll(this.twtoolSort, this.twtoolPaginator);
  }
  twtoolSave(element: twtool) {
    this.twtoolService.FormData = element;
    this.NotificationService.warn(this.twtoolService.ComponentSaveAll(this.twtoolSort, this.twtoolPaginator));
  }
  twtoolDelete(element: twtool) {
    this.twtoolService.BaseParameter.ID = element.TOOLWORK_IDX;
    this.NotificationService.warn(this.twtoolService.ComponentDeleteAll(this.twtoolSort, this.twtoolPaginator));
  }
  twtoolAdd(element: twtool) {
    this.twtoolService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(twtoolDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.twtoolSearch();
    });
  }
}
