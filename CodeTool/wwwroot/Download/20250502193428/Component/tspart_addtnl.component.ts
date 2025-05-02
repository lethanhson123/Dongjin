import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tspart_addtnl } from 'src/app/shared/MES/tspart_addtnl.model';
import { tspart_addtnlService } from 'src/app/shared/MES/tspart_addtnl.service';

@Component({
  selector: 'app-tspart_addtnl',
  templateUrl: './tspart_addtnl.component.html',
  styleUrls: ['./tspart_addtnl.component.css']
})
export class tspart_addtnlComponent implements OnInit {

  @ViewChild('tspart_addtnlSort') tspart_addtnlSort: MatSort;
  @ViewChild('tspart_addtnlPaginator') tspart_addtnlPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tspart_addtnlService: tspart_addtnlService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tspart_addtnlSearch();
  }
  tspart_addtnlSearch() {
    this.tspart_addtnlService.SearchAll(this.tspart_addtnlSort, this.tspart_addtnlPaginator);
  }
  tspart_addtnlSave(element: tspart_addtnl) {
    this.tspart_addtnlService.FormData = element;
    this.NotificationService.warn(this.tspart_addtnlService.ComponentSaveAll(this.tspart_addtnlSort, this.tspart_addtnlPaginator));
  }
  tspart_addtnlDelete(element: tspart_addtnl) {
    this.tspart_addtnlService.BaseParameter.ID = element.PART_ADDTNL_IDX;
    this.NotificationService.warn(this.tspart_addtnlService.ComponentDeleteAll(this.tspart_addtnlSort, this.tspart_addtnlPaginator));
  }
  tspart_addtnlAdd(element: tspart_addtnl) {
    this.tspart_addtnlService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tspart_addtnlDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tspart_addtnlSearch();
    });
  }
}
