import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser_super } from 'src/app/shared/MES/tsuser_super.model';
import { tsuser_superService } from 'src/app/shared/MES/tsuser_super.service';

@Component({
  selector: 'app-tsuser_super',
  templateUrl: './tsuser_super.component.html',
  styleUrls: ['./tsuser_super.component.css']
})
export class tsuser_superComponent implements OnInit {

  @ViewChild('tsuser_superSort') tsuser_superSort: MatSort;
  @ViewChild('tsuser_superPaginator') tsuser_superPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuser_superService: tsuser_superService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuser_superSearch();
  }
  tsuser_superSearch() {
    this.tsuser_superService.SearchAll(this.tsuser_superSort, this.tsuser_superPaginator);
  }
  tsuser_superSave(element: tsuser_super) {
    this.tsuser_superService.FormData = element;
    this.NotificationService.warn(this.tsuser_superService.ComponentSaveAll(this.tsuser_superSort, this.tsuser_superPaginator));
  }
  tsuser_superDelete(element: tsuser_super) {
    this.tsuser_superService.BaseParameter.ID = element.USER_IDX;
    this.NotificationService.warn(this.tsuser_superService.ComponentDeleteAll(this.tsuser_superSort, this.tsuser_superPaginator));
  }
  tsuser_superAdd(element: tsuser_super) {
    this.tsuser_superService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsuser_superDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsuser_superSearch();
    });
  }
}
