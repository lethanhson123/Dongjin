import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { ttoolmaster2 } from 'src/app/shared/MES/ttoolmaster2.model';
import { ttoolmaster2Service } from 'src/app/shared/MES/ttoolmaster2.service';

@Component({
  selector: 'app-ttoolmaster2',
  templateUrl: './ttoolmaster2.component.html',
  styleUrls: ['./ttoolmaster2.component.css']
})
export class ttoolmaster2Component implements OnInit {

  @ViewChild('ttoolmaster2Sort') ttoolmaster2Sort: MatSort;
  @ViewChild('ttoolmaster2Paginator') ttoolmaster2Paginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public ttoolmaster2Service: ttoolmaster2Service,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.ttoolmaster2Search();
  }
  ttoolmaster2Search() {
    this.ttoolmaster2Service.SearchAll(this.ttoolmaster2Sort, this.ttoolmaster2Paginator);
  }
  ttoolmaster2Save(element: ttoolmaster2) {
    this.ttoolmaster2Service.FormData = element;
    this.NotificationService.warn(this.ttoolmaster2Service.ComponentSaveAll(this.ttoolmaster2Sort, this.ttoolmaster2Paginator));
  }
  ttoolmaster2Delete(element: ttoolmaster2) {
    this.ttoolmaster2Service.BaseParameter.ID = element.TOOLMASTER_IDX;
    this.NotificationService.warn(this.ttoolmaster2Service.ComponentDeleteAll(this.ttoolmaster2Sort, this.ttoolmaster2Paginator));
  }
  ttoolmaster2Add(element: ttoolmaster2) {
    this.ttoolmaster2Service.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(ttoolmaster2DetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ttoolmaster2Search();
    });
  }
}
