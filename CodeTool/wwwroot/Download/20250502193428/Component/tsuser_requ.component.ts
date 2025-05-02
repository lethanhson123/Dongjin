import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { tsuser_requ } from 'src/app/shared/MES/tsuser_requ.model';
import { tsuser_requService } from 'src/app/shared/MES/tsuser_requ.service';

@Component({
  selector: 'app-tsuser_requ',
  templateUrl: './tsuser_requ.component.html',
  styleUrls: ['./tsuser_requ.component.css']
})
export class tsuser_requComponent implements OnInit {

  @ViewChild('tsuser_requSort') tsuser_requSort: MatSort;
  @ViewChild('tsuser_requPaginator') tsuser_requPaginator: MatPaginator;

  constructor(
    public Dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public tsuser_requService: tsuser_requService,
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.tsuser_requSearch();
  }
  tsuser_requSearch() {
    this.tsuser_requService.SearchAll(this.tsuser_requSort, this.tsuser_requPaginator);
  }
  tsuser_requSave(element: tsuser_requ) {
    this.tsuser_requService.FormData = element;
    this.NotificationService.warn(this.tsuser_requService.ComponentSaveAll(this.tsuser_requSort, this.tsuser_requPaginator));
  }
  tsuser_requDelete(element: tsuser_requ) {
    this.tsuser_requService.BaseParameter.ID = element.REQU_IDX;
    this.NotificationService.warn(this.tsuser_requService.ComponentDeleteAll(this.tsuser_requSort, this.tsuser_requPaginator));
  }
  tsuser_requAdd(element: tsuser_requ) {
    this.tsuser_requService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.Dialog.open(tsuser_requDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.tsuser_requSearch();
    });
  }
}
